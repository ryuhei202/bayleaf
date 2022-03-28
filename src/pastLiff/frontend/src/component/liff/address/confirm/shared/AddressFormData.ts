import { AddressDeliveryTimeData } from "../../../../../model/liff/address/data/AddressDeliveryTimeData";
import { AddressDestinationData } from "../../../../../model/liff/address/data/AddressDestinationData";
import { AddressMemberData } from "../../../../../model/liff/address/data/AddressMemberData";

export default interface AddressFormData {
  member: AddressMemberData;
  dest: AddressDestinationData;
  time: AddressDeliveryTimeData;
}
