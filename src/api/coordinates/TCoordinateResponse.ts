import { TItemResponse } from "../shared/TItemResponse";

export type TCoordinateResponse = {
  readonly id: number;
  readonly isReviewed: boolean;
  readonly items: TItemResponse[];
};
