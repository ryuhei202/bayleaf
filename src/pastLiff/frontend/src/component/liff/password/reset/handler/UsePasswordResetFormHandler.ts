import { useEffect, useState } from "react";
import { TextInputCallback } from "../../../../shared/inputs/text/callback/TextInputCallback";
import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ErrorAlertDialogCallback } from "../../../../shared/dialog/alert/error/callback/ErrorAlertDialogCallback";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import { PasswordResetFormCallback } from "../callback/PasswordResetFormCallback";
import { PasswordResetFormData } from "../viewData/PasswordResetFormViewData";
import { UsePasswordReset } from "../../../../../model/liff/password/call_api/UsePasswordResetApi";
import { validatorClass } from "../../../../../model/shared/ValidatorClass";
import {
  TextInputValidator,
  TextInputValidatorEventType,
  TextInputValidatorResult
} from "../../../../shared/inputs/text/validator/TextInputValidator";
import { PasswordResetLabelData } from "../../../../../model/liff/password/data/PasswordResetLabelData";
import { textInputValueType } from "../../../../shared/inputs/text/viewData/TextInputViewData";

export interface TextInputHandlerInterface {
  emailInputCallback: TextInputCallback;
  emailInputValidator: ()=> TextInputValidator;
  emailError: () => boolean;
  emailHelperText: () => string;
  errorAlertDialogCallback: () => ErrorAlertDialogCallback;
  errorResponse: () => ErrorResponse | null;
  isRunning: () => boolean;
  onSubmit: () => void;
}

export const usePasswordResetFormHandler = (
  defaultFormData: PasswordResetFormData,
  callback: PasswordResetFormCallback
): TextInputHandlerInterface => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [formData, setFormData] = useState(defaultFormData);
  const [_emailError, setEmailError] = useState<boolean>(false);
  const [_emailHelperText, setEmailHelperText] = useState<string>("");

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const passwordResetApi = UsePasswordReset(formData);
  const apiCallProcess = useApiCallProcess(ApiCallStatus.Idle);

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    if (apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      passwordResetApi
        .response()
        .then(() => {
          apiCallProcess.toIdle();
          callback.onSubmit();
        })
        .catch(error => {
          apiCallProcess.toError(error);
        });
      apiCallProcess.toRunning();
    }
  }, [passwordResetApi, apiCallProcess, callback]);

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
   * メールアドレス入力コールバック
   */
  const emailInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      formData.email = event.target.value;
      setFormData(formData);
    }
  };

  /**
   * メールアドレス入力Validator
   */
  const emailInputValidator = (): TextInputValidator => {
    const validator = validatorClass();
    const label = PasswordResetLabelData.email;
    const emailFormat = /\S+@\S+\.\S+/;
    const target = {
      required: {
        message: `${label}は必須入力です`
      },
      format: {
        message: `${label}は、メールアドレスの形式ではありません`,
        pattern: emailFormat
      }
    };

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const inspector = validator.getTextInputInspect(target);
      const validateResult = inspector(value);
      if (validateResult.isValid) {
        setEmailError(false);
        setEmailHelperText("");
      } else {
        setEmailError(true);
        setEmailHelperText(validateResult.message || "");
      }
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect,
    };
  };

  /**
   * エラーダイアログのコールバック生成
   */
  const errorAlertDialogCallback = (): ErrorAlertDialogCallback => {
    return {
      onClose: onClose
    };
  };

  /**
   * エラーレスポンス
   */
  const errorResponse = (): ErrorResponse | null => {
    return apiCallProcess.errorResponse();
  };

  /**
   * 通信中か
   */
  const isRunning = (): boolean => {
    return apiCallProcess.isRunning();
  };

  /**
   * ログインボタンを押した時のイベント
   */
  const onSubmit = (): void => {
    apiCallProcess.toShouldRun();
  };

  const emailError = (): boolean => {
    return _emailError;
  };

  const emailHelperText = (): string => {
    return _emailHelperText;
  };

  return {
    emailInputCallback,
    emailInputValidator,
    emailError,
    emailHelperText,
    errorAlertDialogCallback,
    errorResponse,
    isRunning,
    onSubmit
  };
};
