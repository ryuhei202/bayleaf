import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { ProgressDialogViewData } from "../../../../shared/dialog/progress/viewData/ProgressDialogViewData";
import { ErrorAlertDialogViewData } from "../../../../shared/dialog/alert/error/viewData/ErrorAlertDialogViewData";
import { TextInputViewData } from "../../../../shared/inputs/text/viewData/TextInputViewData";
import { PasswordResetFormData } from "../viewData/PasswordResetFormViewData";
import { PasswordResetLabelData } from "../../../../../model/liff/password/data/PasswordResetLabelData";

export interface UsePasswordResetFormPresenter {
  emailTextInputViewData: () => TextInputViewData;
  progressDialogViewData: () => ProgressDialogViewData;
  errorAlertDialogViewData: () => ErrorAlertDialogViewData;
}

export const usePasswordResetFormPresenter = (
  defaultFormData: PasswordResetFormData,
  error: boolean,
  helperText: string,
  isApiCallRunning: boolean,
  errorResponse: ErrorResponse | null
): UsePasswordResetFormPresenter => {
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

  const emailTextInputViewData = (): TextInputViewData => {
    return {
      type: "text",
      defaultValue: defaultFormData.email,
      label: PasswordResetLabelData.email,
      placeholder: "name@expample.com",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: error,
      helperText: helperText
    };
  };

  return {
    emailTextInputViewData,
    progressDialogViewData,
    errorAlertDialogViewData
  };
};
