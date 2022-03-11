import { ReturnReserveType } from "../../shared/ReturnReserveType";

export interface ReturnReserveViewData {
  readonly logoImagePath: string;
  readonly messageBeforeHighlight: string;
  readonly messageHighlight: string;
  readonly messageAfterHighlight: string;
  readonly highLightColor: string;
  readonly reserveButtonTitle: string;
  readonly returnReserveType: ReturnReserveType;
}
