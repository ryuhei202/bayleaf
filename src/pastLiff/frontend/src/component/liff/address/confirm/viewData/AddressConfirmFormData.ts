import { AddressDeliveryTimeData } from "../../../../../model/liff/address/data/AddressDeliveryTimeData";

export interface AddressConfirmFormData extends AddressDeliveryTimeData {
  loaded?: boolean;
}

export const AddressConfirmFormDataDefault = (): AddressConfirmFormData => {
  return {
    time: null,
    loaded: false
  };
};
