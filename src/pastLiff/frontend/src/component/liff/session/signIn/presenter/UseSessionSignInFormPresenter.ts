import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { ProgressDialogViewData } from "../../../../shared/dialog/progress/viewData/ProgressDialogViewData";
import { ErrorAlertDialogViewData } from "../../../../shared/dialog/alert/error/viewData/ErrorAlertDialogViewData";
import { TextInputViewData } from "../../../../shared/inputs/text/viewData/TextInputViewData";
import { CheckboxInputViewData } from "../../../../shared/inputs/checkbox/viewData/CheckboxInputViewData";
import {
  SessionSignInFormData,
} from "../../../../../model/liff/session/data/SessionSignInFormData";
import {SessionSignInFormLabelData} from "../../../../../model/liff/session/data/SessionSignInFormLabelData";

export interface UseSessionSignInFormPresenter {
  emailTextInputViewData: () => TextInputViewData;
  passwordTextInputViewData: () => TextInputViewData;
  saveSessionCheckBoxViewData: () => CheckboxInputViewData;
  progressDialogViewData: () => ProgressDialogViewData;
  errorAlertDialogViewData: () => ErrorAlertDialogViewData;
}

export const useSessionSignInFormPresenter = (
  defaultFormData: SessionSignInFormData,
  emailError: boolean,
  emailHelperText: string,
  passwordError: boolean,
  passwordHelperText: string,
  isApiCallRunning: boolean,
  errorResponse: ErrorResponse | null
): UseSessionSignInFormPresenter => {
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
      label: SessionSignInFormLabelData.email,
      placeholder: "name@expample.com",
      required: true,
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: emailError,
      helperText: emailHelperText,
    };
  };

  const passwordTextInputViewData = (): TextInputViewData => {
    return {
      type: "password",
      defaultValue: defaultFormData.password,
      label: SessionSignInFormLabelData.password,
      placeholder: "",
      required: true,
      autoComplete: "on",
      InputLabelProps: { shrink: true },
      fullWidth: true,
      error: passwordError,
      helperText: passwordHelperText,
    };
  };

  const saveSessionCheckBoxViewData = (): CheckboxInputViewData => {
    return {
      defaultChecked: defaultFormData.saveSession,
      label: SessionSignInFormLabelData.saveSession
    };
  };

  return {
    emailTextInputViewData,
    passwordTextInputViewData,
    saveSessionCheckBoxViewData,
    progressDialogViewData,
    errorAlertDialogViewData
  };
};
