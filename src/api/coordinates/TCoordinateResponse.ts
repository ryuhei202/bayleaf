import { TCoordinateItemResponse } from "./TCoordinateItemResponse";

export type TCoordinateResponse = {
  readonly id: number;
  readonly isReviewed: boolean;
  readonly items: TCoordinateItemResponse[];
};
