import { useNavigate } from "react-router-dom";
import { AddressDestinationFormCallback } from "../callback/AddressDestinationFormCallback";
import { AddressDestinationCallback } from "../callback/AddressDestinationCallback";
import { AddressDestinationFormData } from "../viewData/AddressDesitinationData";

export interface AddressDestinationHandler {
  addressDestinationFormCallback: () => AddressDestinationFormCallback;
}

export const useAddressDestinationHandler = (
  callback: AddressDestinationCallback
): AddressDestinationHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * AddressDestinationFromのコールバックを返す
   */
  const navigate = useNavigate();

  const toConfirm = (data: AddressDestinationFormData) => {
    callback.shouldRenewDestination(data);
    navigate("/address/confirm");
  };
  const addressDestinationFormCallback = (): AddressDestinationFormCallback => {
    return {
      toConfirm: toConfirm,
      shouldClearResponseError: callback.shouldClearResponseError,
    };
  };

  return {
    addressDestinationFormCallback,
  };
};
