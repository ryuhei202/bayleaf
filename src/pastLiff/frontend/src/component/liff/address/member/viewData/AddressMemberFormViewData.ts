import {AddressMemberFormData} from "./AddressMemberFormData";
import {AddressPrefListData} from "../../../../../model/liff/address/data/AddressPrefListData";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressMemberFormViewData {
  formData: AddressMemberFormData;
  readonly prefs: AddressPrefListData;
  errorResponse: ErrorResponse;
}
