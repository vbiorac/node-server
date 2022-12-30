import { addPost, getPosts, getAuthors } from './controllers/posts';
import asyncWrap from '../utils/asyncWrap';

const routesConfig = (app) => {
  app.get('/posts', [
    asyncWrap(getPosts),
  ]);
  app.post('/post', [
    asyncWrap(addPost),
  ]);
  app.get('/authors', [
    asyncWrap(getAuthors),
  ]);
};

export default routesConfig;
