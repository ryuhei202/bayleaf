export type TItemResponse = {
  readonly id: number;
  readonly isPurchased: boolean;
  readonly brandName: string;
  readonly imagePaths: {
    original: string;
    large: string;
    largeThumb: string | null;
    thumb: string;
  };
  readonly categoryName: string;
  readonly colorName: string;
  readonly price: number;
  readonly discountedPrice: number;
  readonly purchasePoint: number;
  readonly locationId: number | null;
  readonly discountRate: number;
  readonly isForSale: boolean;
  readonly rank: string;
};
