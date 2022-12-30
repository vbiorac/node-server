import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import config from 'config';

// Routes
import AuthRouter from './auth/routes.config';
import ProductsRouter from './products/routes.config';
import PostsRouter from './posts/routes.config';
import isAuthenticated from './middleware/auth';
import session from './middleware/session';
import { errorConverter, errorHandler } from './middleware/errorHandler';
import Posts from './posts/database/posts';

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../docs/swagger.json');

const configPort = config.get('port');
const app = express();

// Add API docs
const swaggerOptions = {
  customSiteTitle: 'Node Server API docs',
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// TODO - Configure CORS https://expressjs.com/en/resources/middleware/cors.html
app.use(cors({
  origin: [
    `http://localhost:${configPort}`,
  ],
  credentials: true,
}));
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false,
}));
app.use(express.json());
app.use(session);
app.use(isAuthenticated);

AuthRouter(app);
ProductsRouter(app);
PostsRouter(app);

app.use(errorConverter);
app.use(errorHandler);

app.listen(configPort, () => {
  console.log(`Server listening on ${configPort}`);
  Posts.getConnection().then(() => {
    console.log('Connected to database');
  });
});
