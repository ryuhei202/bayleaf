import { ProgressDialogViewData } from "../../../../shared/dialog/progress/viewData/ProgressDialogViewData";
import { AddressDestinationFormViewData } from "../viewData/AddressDestinationFormViewData";

export interface UseAddressDestinationPresenter {
  addressDestinationFormViewData: () => AddressDestinationFormViewData;
  progressDialogViewData: () => ProgressDialogViewData;
}

export const useAddressDestinationPresenter = (
  viewData: AddressDestinationFormViewData
): UseAddressDestinationPresenter => {
  /**
   * 読み込み中表示のViewDataを生成
   */
  const progressDialogViewData = (): ProgressDialogViewData => {
    return {
      open: true
    };
  };

  /**
   * AddressDestinationFormのViewDataの生成
   */
  const addressDestinationFormViewData = (): AddressDestinationFormViewData => {
    return viewData;
  };

  return { addressDestinationFormViewData, progressDialogViewData };
};
