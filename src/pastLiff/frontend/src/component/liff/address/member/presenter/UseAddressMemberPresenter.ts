import {
  AddressMemberFormViewData
} from "../viewData/AddressMemberFormViewData";
import { ProgressDialogViewData } from "../../../../shared/dialog/progress/viewData/ProgressDialogViewData";

export interface UseAddressMemberPresenter {
  addressMemberFormViewData: () => AddressMemberFormViewData;
  progressDialogViewData: () => ProgressDialogViewData;
}

export const useAddressMemberPresenter = (
  viewData: AddressMemberFormViewData
): UseAddressMemberPresenter => {
  /**
   * 読み込み中表示のViewDataを生成
   */
  const progressDialogViewData = (): ProgressDialogViewData => {
    return {
      open: true
    };
  };

  /**
   * AddressMemberFormのViewDataの生成
   */
  const addressMemberFormViewData = (): AddressMemberFormViewData => {
    return viewData;
  };

  return { addressMemberFormViewData: addressMemberFormViewData, progressDialogViewData };
};
