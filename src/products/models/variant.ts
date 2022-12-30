import {
  Attribute,
  ProductVariantAvailability,
} from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product';
import {
  Asset, Image, Price, ScopedPrice,
} from '@commercetools/platform-sdk';
import VariantType from '../types/variantType';

class Variant implements VariantType {
  constructor(body: any) {
    this.id = body.id;
    this.key = body.key;
    this.sku = body.sku;
    this.selected = body.selected ?? false;
    this.attributes = body.attributes;
    this.availability = body.availability;
    this.images = body.images;
    this.price = body.price;
    this.prices = body.prices;
  }

  assets: Asset[];

  attributes: Attribute[];

  availability: ProductVariantAvailability;

  id: number;

  images: Image[];

  isMatchingVariant: boolean;

  key: string;

  price: Price;

  prices: Price[];

  scopedPrice: ScopedPrice;

  scopedPriceDiscounted: boolean;

  sku: string;

  selected: boolean;
}
export default Variant;
