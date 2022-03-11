export interface AddressMemberData {
  name: string;
  kana: string;
  first_name: string;
  first_name_kana: string;
  zip: string;
  pref: string;
  addr1: string;
  addr2: string;
  addr3: string;
  company1: string;
  company2: string;
  tel: string;
  yamatoCenterCode: string;
}

export const AddressMemberDataDefault = (): AddressMemberData => {
  return {
    name: "",
    kana: "",
    first_name: "",
    first_name_kana: "",
    zip: "",
    pref: "",
    addr1: "",
    addr2: "",
    addr3: "",
    company1: "",
    company2: "",
    tel: "",
    yamatoCenterCode: ""
  };
};
