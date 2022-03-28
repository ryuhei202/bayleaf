import {
  AddressMemberData,
  AddressMemberDataDefault
} from "../../../../../model/liff/address/data/AddressMemberData";
import {
  AddressDestinationData,
  AddressDestinationDataDefault
} from "../../../../../model/liff/address/data/AddressDestinationData";
import {
  AddressDeliveryTimeData,
  AddressDeliveryTimeDataDefault
} from "../../../../../model/liff/address/data/AddressDeliveryTimeData";

export interface AddressIndexViewData {
  member: AddressMemberData;
  dest: AddressDestinationData;
  time: AddressDeliveryTimeData;
}

export const AddressIndexViewDataDefault: AddressIndexViewData = {
  member: AddressMemberDataDefault(),
  dest: AddressDestinationDataDefault(),
  time: AddressDeliveryTimeDataDefault(),
};
