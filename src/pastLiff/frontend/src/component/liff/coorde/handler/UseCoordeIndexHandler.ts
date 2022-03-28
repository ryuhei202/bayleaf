import { ErrorAlertDialogCallback } from "../../../shared/dialog/alert/error/callback/ErrorAlertDialogCallback";
import { ApiCallProcess } from "../../../../model/api/shared/UseApiCallProcess";

export interface CoordeIndexHandler {
  errorAlertDialogCallback: () => ErrorAlertDialogCallback;
}

export const useCoordeIndexHandler = (
  apiCallProcess: ApiCallProcess
): CoordeIndexHandler => {
  // ----------------------------------------
  // Event
  // ----------------------------------------
  /**
   * エラーダイアログが閉じられた時のイベント
   */
  const onClose = (): void => {
    apiCallProcess.toIdle();
  };

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * エラーダイアログのコールバック生成
   */
  const errorAlertDialogCallback = (): ErrorAlertDialogCallback => {
    return {
      onClose: onClose
    };
  };

  return { errorAlertDialogCallback };
};
