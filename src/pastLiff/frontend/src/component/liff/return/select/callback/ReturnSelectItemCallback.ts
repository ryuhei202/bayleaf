import { ReturnReserveType } from "../../shared/ReturnReserveType";

export interface ReturnSelectItemCallback {
  onClick: (returnReserveType: ReturnReserveType) => void;
}
