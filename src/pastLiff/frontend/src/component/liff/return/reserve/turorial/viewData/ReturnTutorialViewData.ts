import { ReturnTutorialData } from "../../../../../../model/liff/return/data/ReturnTutorialData";
import { ReturnReserveType } from "../../../shared/ReturnReserveType";

export interface ReturnTutorialViewData {
  readonly tutorials: ReturnTutorialData[];
  readonly tutorialsBeforeLead: string[];
  readonly returnReserveType: ReturnReserveType;
}
