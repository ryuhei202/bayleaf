import { TImagePathsResponse } from "../shared/TImagePathsResponse";

export type TCoordinateItemResponse = {
  readonly id: number;
  readonly isTops: boolean;
  readonly cateSmallName: string;
  readonly imagePaths: TImagePathsResponse;
  readonly color: string;
};
