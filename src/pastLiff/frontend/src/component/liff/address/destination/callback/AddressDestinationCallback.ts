import {AddressDestinationFormData} from "../viewData/AddressDesitinationData";

export interface AddressDestinationCallback {
  shouldRenewDestination: (formData: AddressDestinationFormData) => void;
  shouldClearResponseError: (model: string, attr: string) => void;
}
