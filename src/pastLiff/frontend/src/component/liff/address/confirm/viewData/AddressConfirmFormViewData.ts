import {
  AddressTimeChoicesData,
  AddressTimeChoicesDataDefault
} from "../../../../../model/liff/address/data/AddressTimeChoicesData";
import {AddressConfirmFormData, AddressConfirmFormDataDefault} from "./AddressConfirmFormData";

export interface AddressConfirmFormViewData {
  formData: AddressConfirmFormData;
  timeChoices: AddressTimeChoicesData;
}

export const AddressConfirmFormViewDataDefault: AddressConfirmFormViewData = {
  formData: AddressConfirmFormDataDefault(),
  timeChoices: AddressTimeChoicesDataDefault(),
};