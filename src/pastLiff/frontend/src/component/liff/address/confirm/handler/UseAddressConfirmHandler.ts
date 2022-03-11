import { AddressConfirmCallback } from "../callback/AddressConfirmCallback";
import { AddressConfirmFormCallback } from "../callback/AddressConfirmFormCallback";
import { AddressConfirmPopupCallback } from "../callback/AddressConfirmPopupCallback";

export interface AddressConfirmHandler {
  formCallback: () => AddressConfirmFormCallback;
  popupCallback: () => AddressConfirmPopupCallback;
}

export const useAddressConfirmHandler = (
  callback: AddressConfirmCallback,
  onPopupOpen: () => void,
  onClosePopup: () => void
): AddressConfirmHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  const formCallback = (): AddressConfirmFormCallback => {
    return {
      shouldRenewDeliveryTime: callback.shouldRenewDeliveryTime,
      onPopupOpen: onPopupOpen
    };
  };

  const popupCallback = (): AddressConfirmPopupCallback => {
    return {
      onClose: onClosePopup,
      onError: callback.onError
    };
  };

  return {
    formCallback: formCallback,
    popupCallback: popupCallback
  };
};
