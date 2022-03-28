import AddressGetResponse from "../../../../../model/api/response/liff/address/AddressGetResponse";

export interface AddressMemberGetCallback {
  onSucceeded: (response: AddressGetResponse) => void;
}
