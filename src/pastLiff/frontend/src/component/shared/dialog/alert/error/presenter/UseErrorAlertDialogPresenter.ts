import { AlertDialogViewData } from "../../base/viewData/AlertDialogViewData";
import { ErrorAlertDialogButtonViewData } from "../viewData/ErrorAlertDialogButtonViewData";
import { ErrorAlertDialogViewData } from "../viewData/ErrorAlertDialogViewData";
import {ResponseStatusType} from "../../../../../../model/shared/ResponseStatusType";

export interface ErrorAlertDialogPresenter {
  alertDialogViewData: () => AlertDialogViewData;
  errorAlertDialogButtonViewData: () => ErrorAlertDialogButtonViewData;
}

export const useErrorAlertDialogPresenter = (
  open: boolean,
  viewData: ErrorAlertDialogViewData
): ErrorAlertDialogPresenter => {
  // ----------------------------------------
  // Private
  // ----------------------------------------
  /**
   * エラーメッセージ
   */
  const message = (): string => {
    let message = "";
    if (viewData.errorResponse && viewData.errorResponse.messages) {
      message = viewData.errorResponse.messages.join("\n");
    }
    return message;
  };

  /**
   * ボタンのラベル
   */
  const buttonLabel = (): string => {
    let label = "閉じる";
    if (
      viewData.errorResponse !== null &&
      viewData.errorResponse.status !== ResponseStatusType.OK
    ) {
      // TODO: statusごとにアクションを設定する必要がある
      switch (viewData.errorResponse.status) {
        case ResponseStatusType.Unauthorized:
        case ResponseStatusType.Forbidden:
          label = "ログイン画面へ";
          break;
      }
    }
    return label;
  };

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * AlertDialogのViewDataを返す
   */
  const alertDialogViewData = (): AlertDialogViewData => {
    return {
      open: open,
      title: "エラー",
      message: message()
    };
  };

  /**
   * ボタン部分のViewDataを返す
   */
  const errorAlertDialogButtonViewData = (): ErrorAlertDialogButtonViewData => {
    return {
      label: buttonLabel()
    };
  };

  return { alertDialogViewData, errorAlertDialogButtonViewData };
};
