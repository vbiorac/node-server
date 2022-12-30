import ProductProjection from '../models/productProjection';

export interface ProductPagedQueryResponseType {
  readonly limit: number;
  readonly count: number;
  readonly total?: number;
  readonly offset: number;
  readonly results: ProductProjection[];
}
