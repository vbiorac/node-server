import {
  Attribute,
  ProductVariant,
  ProductVariantAvailability,
} from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product';
import {
  Asset, Image, Price, ScopedPrice,
} from '@commercetools/platform-sdk';

class VariantType implements ProductVariant {
  readonly assets: Asset[];

  readonly attributes: Attribute[];

  readonly availability: ProductVariantAvailability;

  readonly id: number;

  readonly images: Image[];

  readonly isMatchingVariant: boolean;

  readonly key: string;

  readonly price: Price;

  readonly prices: Price[];

  readonly scopedPrice: ScopedPrice;

  readonly scopedPriceDiscounted: boolean;

  readonly sku: string;

  readonly selected: boolean;
}
export default VariantType;
