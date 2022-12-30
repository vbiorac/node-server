import { CategoryReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/category';
import { ProductVariant } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product';
import { LocalizedString } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/common';
import { ProductTypeReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
import { ReviewRatingStatistics } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/review';
import ProductProjectionType from '../types/productProjectionType';
import Variant from './variant';

class ProductProjection implements ProductProjectionType {
  constructor(data: any) {
    this.id = data.id;
    this.key = data.key;
    this.name = data.name;
    this.slug = data.slug;
    this.masterVariant = new Variant(data.masterVariant);
    this.variants = this.mapVariants(data.variants);
    this.version = data.version;
    this.categories = data.categories;
    this.description = data.description;
    this.metaDescription = data.metaDescription;
    this.metaKeywords = data.metaKeywords;
    this.metaTitle = data.metaTitle;
    this.productType = data.productType;
    this.createdAt = data.createdAt;
  }

  categories: CategoryReference[];

  description?: LocalizedString;

  hasStagedChanges?: boolean;

  id: string;

  key?: string;

  masterVariant: Variant;

  metaDescription?: LocalizedString;

  metaKeywords?: LocalizedString;

  metaTitle?: LocalizedString;

  name: LocalizedString;

  productType: ProductTypeReference;

  published?: boolean;

  reviewRatingStatistics?: ReviewRatingStatistics;

  slug: LocalizedString;

  variants: Variant[];

  createdAt: string;

  lastModifiedAt: string;

  version: number;

  // eslint-disable-next-line class-methods-use-this
  mapVariants(data : ProductVariant[]) : Variant[] {
    let variants : Variant[] = [];
    variants = variants.concat(data.map((variant) => new Variant(variant)));
    return variants;
  }
}
export default ProductProjection;
