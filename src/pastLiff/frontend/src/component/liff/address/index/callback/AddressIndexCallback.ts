import { AddressIndexViewData } from "../viewData/AddressIndexViewData";
import { AddressDestinationFormData } from "../../destination/viewData/AddressDesitinationData";
import { AddressMemberFormData } from "../../member/viewData/AddressMemberFormData";
import { AddressOptionsData } from "../../../../../model/liff/address/data/AddressOptionsData";
import { AddressConfirmFormData } from "../../confirm/viewData/AddressConfirmFormData";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressIndexCallback {
  shouldRenewMember: (formData: AddressMemberFormData) => void;
  shouldRenewDestination: (formData: AddressDestinationFormData) => void;
  shouldRenewDeliveryTime: (formData: AddressConfirmFormData) => void;
  shouldClearResponseError: (model: string, attr: string) => void;
  onLoad: (viewData: AddressIndexViewData) => void;
  onError: (errorResponse: ErrorResponse | null) => void;
  onOptionsLoad: (options: AddressOptionsData) => void;
}
