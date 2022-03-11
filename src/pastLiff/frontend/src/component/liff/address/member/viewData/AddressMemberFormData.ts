import { AddressMemberData } from "../../../../../model/liff/address/data/AddressMemberData";

export interface AddressMemberFormData
  extends Pick<
    AddressMemberData,
    Exclude<
      keyof AddressMemberData,
      "name" | "kana" | "first_name" | "first_name_kana"
    >
  > {
  loaded?: boolean;
}

export const AddressMemberFormDataDefault = (): AddressMemberFormData => {
  return {
    zip: "",
    pref: "",
    addr1: "",
    addr2: "",
    addr3: "",
    company1: "",
    company2: "",
    tel: "",
    yamatoCenterCode: "",
    loaded: false
  };
};
