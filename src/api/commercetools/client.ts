import {
  ClientBuilder,
  createAuthForClientCredentialsFlow,
  createHttpClient,
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
  Client,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import fetch from 'node-fetch';
import config from 'config';

const commercetoolsConfig: any = config.get('commercetools');

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: commercetoolsConfig.authHost,
  projectKey: commercetoolsConfig.projectKey,
  credentials: {
    clientId: commercetoolsConfig.clientId,
    clientSecret: commercetoolsConfig.clientSecret,
  },
  oauthUri: '/oauth/token', // - optional custom oauthUri
  scopes: [`manage_project:${commercetoolsConfig.projectKey}`],
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: commercetoolsConfig.apiHost,
  fetch,
};

const client: Client = new ClientBuilder()
  .withProjectKey(commercetoolsConfig.projectKey)
  .withMiddleware(createAuthForClientCredentialsFlow(authMiddlewareOptions))
  .withMiddleware(createHttpClient(httpMiddlewareOptions))
  .withUserAgentMiddleware()
  .build();

const ctApiRootClient = createApiBuilderFromCtpClient(client)
  .withProjectKey({ projectKey: commercetoolsConfig.projectKey });

export {
  client,
  ctApiRootClient,
};
