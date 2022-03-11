import { AddressDestinationFormData } from "../viewData/AddressDesitinationData";

export interface AddressDestinationFormCallback {
  toConfirm: (data: AddressDestinationFormData) => void;
  shouldClearResponseError: (model: string, attr: string) => void;
}
