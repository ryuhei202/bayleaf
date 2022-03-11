import { ErrorAlertDialogViewData } from "../../../shared/dialog/alert/error/viewData/ErrorAlertDialogViewData";
import ErrorResponse from "../../../../model/api/response/shared/ErrorResponse";
import { ProgressDialogViewData } from "../../../shared/dialog/progress/viewData/ProgressDialogViewData";

export interface CoordeIndexPresenter {
  progressDialogViewData: () => ProgressDialogViewData;
  errorAlertDialogViewData: () => ErrorAlertDialogViewData;
}

export const useCoordeIndexPresenter = (
  isApiCallRunning: boolean,
  errorResponse: ErrorResponse | null
): CoordeIndexPresenter => {
  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 読み込み中表示のViewDataを生成
   */
  const progressDialogViewData = (): ProgressDialogViewData => {
    return {
      open: isApiCallRunning
    };
  };

  /**
   * エラーアラートのViewDataを生成
   */
  const errorAlertDialogViewData = (): ErrorAlertDialogViewData => {
    return {
      errorResponse: errorResponse
    };
  };

  return {
    progressDialogViewData,
    errorAlertDialogViewData
  };
};
