import { AddressMemberData } from "../../../../liff/address/data/AddressMemberData";
import { AddressDestinationData } from "../../../../liff/address/data/AddressDestinationData";
import { AddressDeliveryTimeData } from "../../../../liff/address/data/AddressDeliveryTimeData";

export default interface AddressGetResponse {
  member: AddressMemberData;
  dest: AddressDestinationData;
  time: AddressDeliveryTimeData;
}
