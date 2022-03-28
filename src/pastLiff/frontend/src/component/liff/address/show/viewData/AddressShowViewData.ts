import { AddressStaticData } from "../../../../../model/liff/address/data/AddressStaticData";

export interface AddressShowViewData {
  member: AddressStaticData;
  dest: AddressStaticData;
  timeText: string;
  loaded: boolean;
}
