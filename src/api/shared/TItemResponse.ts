import { TImagePathsResponse } from "./TImagePathsResponse";

export type TItemResponse = {
  readonly id: number;
  readonly isTops: boolean;
  readonly isPurchased: boolean;
  readonly brandName: string;
  readonly imagePaths: TImagePathsResponse;
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
