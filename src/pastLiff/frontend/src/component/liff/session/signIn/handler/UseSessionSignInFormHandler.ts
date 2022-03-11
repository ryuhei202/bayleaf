import { useState, useEffect } from "react";
import { SessionSignInFormData } from "../../../../../model/liff/session/data/SessionSignInFormData";
import { TextInputCallback } from "../../../../shared/inputs/text/callback/TextInputCallback";
import { CheckboxInputCallback } from "../../../../shared/inputs/checkbox/callback/CheckboxInputCallback";
import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ErrorAlertDialogCallback } from "../../../../shared/dialog/alert/error/callback/ErrorAlertDialogCallback";
import { UseAuthenticateSession } from "../../../../../model/liff/session/call_api/UseAuthenticateSessionApi";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import SessionAuthenticateResponse from "../../../../../model/api/response/liff/session/SessionAuthenticateResponse";
import { useSession } from "../../../../../model/shared/Session/UseSession";
import { SessionSignInFormCallback } from "../callback/SessionSignInFormCallback";
import {
  TextInputValidator,
  TextInputValidatorEventType,
  TextInputValidatorResult
} from "../../../../shared/inputs/text/validator/TextInputValidator";
import { validatorClass } from "../../../../../model/shared/ValidatorClass";
import { textInputValueType } from "../../../../shared/inputs/text/viewData/TextInputViewData";
import {SessionSignInFormLabelData} from "../../../../../model/liff/session/data/SessionSignInFormLabelData";

export interface TextInputHandlerInterface {
  emailInputCallback: TextInputCallback;
  passwordInputCallback: TextInputCallback;
  checkboxInputCallback: CheckboxInputCallback;
  emailInputValidator: () => TextInputValidator;
  passwordInputValidator: () => TextInputValidator;
  hasInputError: () => boolean;
  emailError: () => boolean;
  emailHelperText: () => string;
  passwordError: () => boolean;
  passwordHelperText: () => string;
  errorAlertDialogCallback: () => ErrorAlertDialogCallback;
  errorResponse: () => ErrorResponse | null;
  isRunning: () => boolean;
  onSubmit: () => void;
}

export const useSessionSignInFormHandler = (
  defaultFormData: SessionSignInFormData,
  callback: SessionSignInFormCallback
): TextInputHandlerInterface => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [formData, setFormData] = useState(defaultFormData);
  const [_hasInputError, setHasInputError] = useState<boolean>(false);
  const [_emailError, setEmailError] = useState<boolean>(false);
  const [_emailHelperText, setEmailHelperText] = useState<string>("");
  const [_passwordError, setPasswordError] = useState<boolean>(false);
  const [_passwordHelperText, setPasswordHelperText] = useState<string>("");

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const sessionApi = UseAuthenticateSession(formData);
  const apiCallProcess = useApiCallProcess(ApiCallStatus.Idle);
  const session = useSession();

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    setHasInputError(_emailError || _passwordError);

    if (apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      sessionApi
        .authenticate()
        .then((data: SessionAuthenticateResponse) => {
          apiCallProcess.toIdle();
          session.setMemberAuthFromResponse(data, formData.saveSession);
          callback.onSignIn();
        })
        .catch(error => {
          apiCallProcess.toError(error);
        });
      apiCallProcess.toRunning();
    }
  }, [sessionApi, apiCallProcess, callback]);

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
   * パスワード入力コールバック
   */
  const passwordInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      formData.password = event.target.value;
      setFormData(formData);
    }
  };

  /**
   * セッション保存チェック入力コールバック
   */
  const checkboxInputCallback: CheckboxInputCallback = {
    onChange: (): void => {
      formData.saveSession = !formData.saveSession;
      setFormData(formData);
    }
  };

  /**
   * メールアドレス入力Validator
   */
  const emailInputValidator = (): TextInputValidator => {
    const label = SessionSignInFormLabelData.email;
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
      const validator = validatorClass();
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
      inspect: inspect
    };
  };

  /**
   * パスワード入力Validator
   */
  const passwordInputValidator = (): TextInputValidator => {
    const label = SessionSignInFormLabelData.password;
    const target = {
      required: {
        message: `${label}は必須入力です`
      }
    };

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validator = validatorClass();
      const inspector = validator.getTextInputInspect(target);
      const validateResult = inspector(value);
      if (validateResult.isValid) {
        setPasswordError(false);
        setPasswordHelperText("");
      } else {
        setPasswordError(true);
        setPasswordHelperText(validateResult.message || "");
      }
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
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
  const hasInputError = (): boolean => {
    return _hasInputError;
  };
  const emailError = (): boolean => {
    return _emailError;
  };
  const emailHelperText = (): string => {
    return _emailHelperText;
  };
  const passwordError = (): boolean => {
    return _passwordError;
  };
  const passwordHelperText = (): string => {
    return _passwordHelperText;
  };

  return {
    emailInputCallback,
    passwordInputCallback,
    checkboxInputCallback,
    emailInputValidator,
    passwordInputValidator,
    hasInputError,
    emailError,
    emailHelperText,
    passwordError,
    passwordHelperText,
    errorAlertDialogCallback,
    errorResponse,
    isRunning,
    onSubmit
  };
};
