import { ClientResponse } from '@commercetools/platform-sdk';
import { ProductPagedQueryResponseType } from '../types/productPagedQueryResponse';
import ProductProjection from './productProjection';

class ProductPagedQueryResponse implements ProductPagedQueryResponseType {
  constructor(data: ClientResponse) {
    this.count = data.body.count;
    this.limit = data.body.limit;
    this.offset = data.body.offset;
    this.total = data.body.total;
    this.results = this.mapProducts(data);
  }

  count: number;

  limit: number;

  offset: number;

  results: ProductProjection[];

  total: number;

  // eslint-disable-next-line class-methods-use-this
  mapProducts(data : ClientResponse) : ProductProjection[] {
    let products : ProductProjection[] = [];
    products = products.concat(data.body.results.map((productData) => new ProductProjection(productData)));
    return products;
  }
}
export default ProductPagedQueryResponse;
