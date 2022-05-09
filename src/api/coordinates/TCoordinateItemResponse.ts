import { TImagePathsResponse } from "../shared/TImagePathsResponse";

export type TCoordinateItemResponse = {
  readonly cateSmallName: string;
  readonly imagePaths: TImagePathsResponse;
  readonly color: string;
};
