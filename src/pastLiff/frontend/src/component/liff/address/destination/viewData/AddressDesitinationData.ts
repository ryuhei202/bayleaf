import { AddressDestinationData } from "../../../../../model/liff/address/data/AddressDestinationData";

export interface AddressDestinationFormData
  extends Pick<
    AddressDestinationData,
    Exclude<
      keyof AddressDestinationData,
      "first_name" | "first_name_kana" | "input_status"
    >
  > {
  // camelizeする
  firstName: string;
  firstNameKana: string;
  loaded?: boolean;
}

export const AddressDestinationFormDataDefault = (): AddressDestinationFormData => {
  return {
    name: "",
    kana: "",
    firstName: "",
    firstNameKana: "",
    zip: "",
    pref: "",
    addr1: "",
    addr2: "",
    addr3: "",
    company1: "",
    company2: "",
    loaded: false
  };
};
