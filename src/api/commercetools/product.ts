import { ClientResponse } from '@commercetools/platform-sdk';
import { ctApiRootClient } from './client';
import ProductPagedQueryResponse from '../../products/models/productPagedQueryResponse';
import ProductProjection from '../../products/models/productProjection';

const get = async (limit: number, offset: number, withTotal: boolean = false, where : string = null) : Promise<ProductPagedQueryResponse> => {
  try {
    const queryArgs : any = {
      staged: false,
      limit,
      offset,
      withTotal,
    };
    if (where) {
      queryArgs.where = where;
    }
    const data = await ctApiRootClient.productProjections().get({
      queryArgs,
    }).execute();
    return new ProductPagedQueryResponse(data);
  } catch (error) {
    return error;
  }
};

const getBySkus = async (skus: []) : Promise<ProductPagedQueryResponse> => {
  try {
    const data = await ctApiRootClient.products().get({
      queryArgs: {
        where: `masterData(current(masterVariant(sku in (${skus}))))`,
        withTotal: false,
        staged: false,
      },
    }).execute();
    return new ProductPagedQueryResponse(data);
  } catch (error) {
    return error;
  }
};

const getByID = async (productId: string) : Promise<ProductProjection> => {
  try {
    const data: ClientResponse = await ctApiRootClient.productProjections().withId({
      ID: productId,
    }).get().execute();
    return new ProductProjection(data.body);
  } catch (error) {
    return error;
  }
};

const getBySlug = async (slug: string) : Promise<ProductProjection> => {
  try {
    const defaultLocale = 'de-CH';
    const data = await ctApiRootClient.productProjections().get({
      queryArgs: {
        where: `slug(${defaultLocale}="${slug}")`,
        withTotal: false,
        staged: false,
      },
    }).execute();

    if (data.body?.results.length) {
      const productData: any = data.body.results[0];
      return new ProductProjection(productData);
    }
    return null;
  } catch (error) {
    return error;
  }
};

export {
  get,
  getByID,
  getBySkus,
  getBySlug,
};
