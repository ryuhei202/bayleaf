import { AddressStaticData } from "../../../../../model/liff/address/data/AddressStaticData";
import { AddressTimeChoicesData } from "../../../../../model/liff/address/data/AddressTimeChoicesData";
import { AddressConfirmFormData } from "./AddressConfirmFormData";
import AddressFormData from "../shared/AddressFormData";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressConfirmViewData {
  member: AddressStaticData;
  dest: AddressStaticData;
  time: AddressConfirmFormData;
  timeChoices: AddressTimeChoicesData;
  addressData: AddressFormData;
  loaded: boolean;
  errorResponse: ErrorResponse;
}
