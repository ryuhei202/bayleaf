import {
  AddressPrefListData,
  AddressPrefListDataDefault
} from "./AddressPrefListData";
import {
  AddressTimeChoicesData,
  AddressTimeChoicesDataDefault
} from "./AddressTimeChoicesData";

export interface AddressOptionsData {
  timeChoices: AddressTimeChoicesData;
  prefs: AddressPrefListData;
  loaded: boolean;
}

export const AddressOptionsDataDefault = ():AddressOptionsData => {
  return {
    timeChoices: AddressTimeChoicesDataDefault(),
    prefs: AddressPrefListDataDefault(),
    loaded: false
  }
};
