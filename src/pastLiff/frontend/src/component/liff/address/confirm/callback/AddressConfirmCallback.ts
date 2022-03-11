import { AddressIndexCallback } from "../../index/callback/AddressIndexCallback";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressConfirmCallback
  extends Pick<AddressIndexCallback, "shouldRenewDeliveryTime"> {
  onError: (errorResponse: ErrorResponse | null) => void;
}
