import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";

export interface AddressConfirmPopupCallback {
  onClose: () => void;
  onError: (errorResponse: ErrorResponse | null) => void;
}
