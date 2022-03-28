import AddressGetResponse from "../../../../../model/api/response/liff/address/AddressGetResponse";

export interface AddressDestinationGetCallback {
  onSucceeded: (response: AddressGetResponse) => void;
}
