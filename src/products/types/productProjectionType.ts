import { CategoryOrderHints, ProductProjection, SearchKeywords } from '@commercetools/platform-sdk';
import { CategoryReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/category';
import { LocalizedString } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/common';
import { ProductTypeReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product-type';
import { ReviewRatingStatistics } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/review';
import { StateReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/state';
import { TaxCategoryReference } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/tax-category';
import VariantType from './variantType';

class ProductProjectionType implements ProductProjection {
  readonly categories: CategoryReference[];

  readonly categoryOrderHints?: CategoryOrderHints;

  readonly createdAt: string;

  readonly description?: LocalizedString;

  readonly hasStagedChanges?: boolean;

  readonly id: string;

  readonly key?: string;

  readonly lastModifiedAt: string;

  readonly masterVariant: VariantType;

  readonly metaDescription?: LocalizedString;

  readonly metaKeywords?: LocalizedString;

  readonly metaTitle?: LocalizedString;

  readonly name: LocalizedString;

  readonly productType: ProductTypeReference;

  readonly published?: boolean;

  readonly reviewRatingStatistics?: ReviewRatingStatistics;

  readonly searchKeywords?: SearchKeywords;

  readonly slug: LocalizedString;

  readonly state?: StateReference;

  readonly taxCategory?: TaxCategoryReference;

  readonly variants: VariantType[];

  readonly version: number;
}
export default ProductProjectionType;
