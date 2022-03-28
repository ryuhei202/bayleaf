export interface AddressDeliveryTimeData {
  time: number | null;
}

export const AddressDeliveryTimeDataDefault = (): AddressDeliveryTimeData => {
  return {
    time: null
  };
};
