import { TCoordinateItemResponse } from "./TCoordinateItemResponse";

export type TCoordinateResponse = {
  readonly id: number;
  readonly isReviewedOrSkipped: boolean;
  readonly items: TCoordinateItemResponse[];
};
