import { SelectInputViewData } from "../../../../shared/inputs/select/viewData/SelectInputViewData";
import { AddressConfirmFormData } from "../viewData/AddressConfirmFormData";
import { AddressTimeChoicesData } from "../../../../../model/liff/address/data/AddressTimeChoicesData";
import { AddressDeliveryTImeLabelData } from "../../../../../model/liff/address/data/label/AddressDeliveryTImeLabelData";

export interface UseAddressConfirmFormPresenter {
  timeSelectInputViewData: () => SelectInputViewData;
}

export const useAddressConfirmFormPresenter = (
  defaultFormData: AddressConfirmFormData,
  timeList: AddressTimeChoicesData
): UseAddressConfirmFormPresenter => {
  const timeSelectInputViewData = (): SelectInputViewData => {
    const time = defaultFormData && defaultFormData.time ? defaultFormData.time : undefined;
    return {
      listData: timeList,
      defaultValue: time,
      label: AddressDeliveryTImeLabelData.time,
      placeholder: "選択してください",
      required: false,
      fullWidth: true
    };
  };

  return {
    timeSelectInputViewData
  };
};
