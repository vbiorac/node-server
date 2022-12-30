import { ctApiRootClient } from './client';

const authenticate = (email: string, password: string, anonymousCartId?: string) => new Promise((resolve, reject) => {
  ctApiRootClient.login().post({
    body: {
      email,
      password,
      anonymousCartId,
    },
  }).execute()
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      reject(error);
    });
});

export default authenticate;
