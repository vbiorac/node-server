import { login, logout } from './controllers/authentication';

const routesConfig = (app) => {
  app.post('/login', [
    login,
  ]);
  app.get('/logout', [
    logout,
  ]);
};

export default routesConfig;
