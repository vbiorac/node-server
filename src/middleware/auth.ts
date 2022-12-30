// middleware to test if authenticated
import crypto from 'crypto';

const isAuthenticated = async (req, res, next) => {
  const now = new Date().toString();
  console.log(now);
  console.log('Inside the isAuthenticated middleware');
  console.log('Req path', req.path);
  console.log('Is logged in', req.session.loggedIn);
  console.log('Customer', req.session.customer);
  console.log(req.session);
  if (req.path === '/cart' && req.method === 'PATCH' && !Object.keys(req.session).length) {
    const uuid = crypto.randomUUID();
    req.session.customer = uuid;
    req.session.loggedIn = false;
    await req.session.save();
  }
  next();
};

export default isAuthenticated;
