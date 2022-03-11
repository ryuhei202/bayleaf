export interface AddressStaticData {
  zip: string;
  city: string;
  ward: string;
  building: string;
  department: string;
  tel?: string;
  name?: string;
  nameKana?: string;
  yamatoCenterCode?: string;
}

export const AddressStaticDataDefault = (): AddressStaticData => {
  return {
    zip: "",
    city: "",
    ward: "",
    building: "",
    department: ""
  };
};
