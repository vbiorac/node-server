import ProductPagedQueryResponse from '../models/productPagedQueryResponse';
import { get } from '../../api/commercetools/product';
import ProductProjection from '../models/productProjection';

const defaultLimit = 12;
const setProperVariants = async (query: any, productsPagedResponse: ProductPagedQueryResponse) :Promise<ProductPagedQueryResponse> => {
  if (query.skus) {
    const { results } = productsPagedResponse;
    const skus : string[] = query.skus.split(',');

    const newResults : ProductProjection[] = results.map((result) :ProductProjection => {
      if (skus.includes(result.masterVariant.sku)) {
        // eslint-disable-next-line no-param-reassign
        result.masterVariant.selected = true;
      } else {
        result.variants.forEach((variant) => {
          if (skus.includes(variant.sku)) {
            // eslint-disable-next-line no-param-reassign
            variant.selected = true;
          }
        });
      }
      return result;
    });
    // eslint-disable-next-line no-param-reassign
    productsPagedResponse.results = newResults;
    return productsPagedResponse;
  }
  return productsPagedResponse;
};

const getProductsByParams = async (query: any) => {
  const page = query?.page ? Number(query.page) : 0;
  const limit = query?.limit ? Number(query.limit) : defaultLimit;
  const offset = page * limit;
  const withTotal = query?.withTotal ?? false;
  let where = null;
  if (query.skus) {
    where = `masterVariant(sku in (${query.skus})) or variants(sku in (${query.skus}))`;
  }
  try {
    let productsPagedResponse: ProductPagedQueryResponse = await get(limit, offset, withTotal, where);
    productsPagedResponse = await setProperVariants(query, productsPagedResponse);
    return productsPagedResponse;
  } catch (error) {
    return error;
  }
};
export {
  getProductsByParams,
};
