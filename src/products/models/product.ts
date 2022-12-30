import { TaxCategoryReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/tax-category';
import { StateReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/state';
import { ReviewRatingStatistics } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/review';
import { ProductTypeReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
import { ProductCatalogData, Product as CtProduct } from '@commercetools/platform-sdk';
import { CreatedBy, LastModifiedBy } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/common';

class Product implements CtProduct {
  constructor(body : CtProduct) {
    this.id = body.id;
    this.key = body.key;
    this.createdAt = body.createdAt;
    this.createdBy = body.createdBy;
    this.lastModifiedAt = body.lastModifiedAt;
    this.lastModifiedBy = body.lastModifiedBy;
    this.masterData = body.masterData;
    this.productType = body.productType;
    this.reviewRatingStatistics = body.reviewRatingStatistics;
    this.state = body.state;
    this.taxCategory = body.taxCategory;
    this.version = body.version;
  }

  createdAt: string;

  createdBy: CreatedBy;

  id: string;

  key: string;

  lastModifiedAt: string;

  lastModifiedBy: LastModifiedBy;

  masterData: ProductCatalogData;

  productType: ProductTypeReference;

  reviewRatingStatistics: ReviewRatingStatistics;

  state: StateReference;

  taxCategory: TaxCategoryReference;

  version: number;
}
export default Product;
