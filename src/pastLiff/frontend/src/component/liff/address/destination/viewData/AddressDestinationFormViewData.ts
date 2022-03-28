import { AddressPrefListData } from "../../../../../model/liff/address/data/AddressPrefListData";
import { AddressDestinationFormData } from "./AddressDesitinationData";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressDestinationFormViewData {
  formData: AddressDestinationFormData;
  readonly prefs: AddressPrefListData;
  errorResponse: ErrorResponse;
}
