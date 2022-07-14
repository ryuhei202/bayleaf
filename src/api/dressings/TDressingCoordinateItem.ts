import { TCoordinateItemResponse } from "../coordinates/TCoordinateItemResponse";

export type TDressingCoordinateItem = {
  readonly isChangeItem: boolean;
  readonly items: TCoordinateItemResponse;
};
