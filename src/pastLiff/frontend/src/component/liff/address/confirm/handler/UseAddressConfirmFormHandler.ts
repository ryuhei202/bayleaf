import { useState } from "react";
import { SelectInputCallback } from "../../../../shared/inputs/select/callback/SelectInputCallback";
import { AddressConfirmFormData } from "../viewData/AddressConfirmFormData";
import { AddressConfirmFormCallback } from "../callback/AddressConfirmFormCallback";

export interface TextInputHandlerInterface {
  // callback
  timeInputCallback: SelectInputCallback;
}

export const useAddressConfirmFormHandler = (
  defaultFormData: AddressConfirmFormData,
  callback: AddressConfirmFormCallback
): TextInputHandlerInterface => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_formData, setFormData] = useState(defaultFormData);

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  const timeInputCallback: SelectInputCallback = {
    onChange: (event): void => {
      _formData.time = event.target.value;
      setFormData(_formData);
      callback.shouldRenewDeliveryTime(_formData);
    }
  };

  return {
    timeInputCallback
  };
};
