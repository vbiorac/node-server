import { getProductById, getProducts, getProductBySlug } from './controllers/products';

const routesConfig = (app) => {
  app.get('/products', [
    getProducts,
  ]);
  app.get('/product/:productId', [
    getProductById,
  ]);
  app.get('/product-by-slug/:slug', [
    getProductBySlug,
  ]);
};

export default routesConfig;
