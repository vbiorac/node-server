import { getByID, getBySlug } from '../../api/commercetools/product';
import ProductPagedQueryResponse from '../models/productPagedQueryResponse';
import ProductProjection from '../models/productProjection';
import { getProductsByParams } from '../services/products';

const getProducts = async (req, res) => {
  try {
    const { query } = req;
    const productsPagedResponse: ProductPagedQueryResponse = await getProductsByParams(query);
    res.send(productsPagedResponse);
  } catch (error) {
    res.status(error.statusCode);
    res.send(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { params: { productId } } = req;
    const product: ProductProjection = await getByID(productId);
    res.send(product);
  } catch (error) {
    res.status(error.statusCode);
    res.send(error);
  }
};

const getProductBySlug = async (req, res) => {
  try {
    const { params: { slug } } = req;
    const product: ProductProjection = await getBySlug(slug);
    res.send(product);
  } catch (error) {
    res.status(error.statusCode);
    res.send(error);
  }
};
export {
  getProducts,
  getProductById,
  getProductBySlug,
};
