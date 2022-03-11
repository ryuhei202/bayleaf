import { useState } from "react";
import { TextInputCallback } from "../../../../shared/inputs/text/callback/TextInputCallback";
import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ErrorAlertDialogCallback } from "../../../../shared/dialog/alert/error/callback/ErrorAlertDialogCallback";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import { AddressDestinationFormCallback } from "../callback/AddressDestinationFormCallback";
import { validatorClass } from "../../../../../model/shared/ValidatorClass";
import {
  TextInputValidator,
  TextInputValidatorEventType,
  TextInputValidatorParam,
  TextInputValidatorResult,
  TextInputValidatorTarget
} from "../../../../shared/inputs/text/validator/TextInputValidator";
import { textInputValueType } from "../../../../shared/inputs/text/viewData/TextInputViewData";
import { AddressLabelData } from "../../../../../model/liff/address/data/label/AddressLabelData";
import { SelectInputCallback } from "../../../../shared/inputs/select/callback/SelectInputCallback";
import { AddressDestinationFormData } from "../viewData/AddressDesitinationData";
import {ModelType} from "../../../../../model/shared/Mapper/ModelType";

export interface TextInputHandlerInterface {
  // callback
  nameInputCallback: TextInputCallback;
  kanaInputCallback: TextInputCallback;
  firstNameInputCallback: TextInputCallback;
  firstNameKanaInputCallback: TextInputCallback;
  zipInputCallback: TextInputCallback;
  prefInputCallback: SelectInputCallback;
  addr1InputCallback: TextInputCallback;
  addr2InputCallback: TextInputCallback;
  addr3InputCallback: TextInputCallback;
  company1InputCallback: TextInputCallback;
  company2InputCallback: TextInputCallback;
  // validator
  nameInputValidator: () => TextInputValidator;
  kanaInputValidator: () => TextInputValidator;
  firstNameInputValidator: () => TextInputValidator;
  firstNameKanaInputValidator: () => TextInputValidator;
  zipInputValidator: () => TextInputValidator;
  addr1InputValidator: () => TextInputValidator;
  addr2InputValidator: () => TextInputValidator;
  addr3InputValidator: () => TextInputValidator;
  company1InputValidator: () => TextInputValidator;
  company2InputValidator: () => TextInputValidator;
  // error
  nameError: () => boolean;
  kanaError: () => boolean;
  firstNameError: () => boolean;
  firstNameKanaError: () => boolean;
  zipError: () => boolean;
  addr1Error: () => boolean;
  addr2Error: () => boolean;
  addr3Error: () => boolean;
  company1Error: () => boolean;
  company2Error: () => boolean;
  // helper
  nameHelperText: () => string;
  kanaHelperText: () => string;
  firstNameHelperText: () => string;
  firstNameKanaHelperText: () => string;
  zipHelperText: () => string;
  addr1HelperText: () => string;
  addr2HelperText: () => string;
  addr3HelperText: () => string;
  company1HelperText: () => string;
  company2HelperText: () => string;

  errorAlertDialogCallback: () => ErrorAlertDialogCallback;
  errorResponse: () => ErrorResponse | null;
  isRunning: () => boolean;
  onSubmit: () => void;
}

export const useAddressDestinationFormHandler = (
  defaultFormData: AddressDestinationFormData,
  callback: AddressDestinationFormCallback,
): TextInputHandlerInterface => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_formData, setFormData] = useState(defaultFormData);

  const [_nameError, setNameError] = useState<boolean>(false);
  const [_nameHelperText, setNameHelperText] = useState<string>("");
  const [_kanaError, setKanaError] = useState<boolean>(false);
  const [_kanaHelperText, setKanaHelperText] = useState<string>("");
  const [_firstNameError, setFirstNameError] = useState<boolean>(false);
  const [_firstNameHelperText, setFirstNameHelperText] = useState<string>("");
  const [_firstNameKanaError, setFirstNameKanaError] = useState<boolean>(false);
  const [_firstNameKanaHelperText, setFirstNameKanaHelperText] = useState<
    string
  >("");
  const [_zipError, setZipError] = useState<boolean>(false);
  const [_zipHelperText, setZipHelperText] = useState<string>("");
  const [_addr1Error, setAddr1Error] = useState<boolean>(false);
  const [_addr1HelperText, setAddr1HelperText] = useState<string>("");
  const [_addr2Error, setAddr2Error] = useState<boolean>(false);
  const [_addr2HelperText, setAddr2HelperText] = useState<string>("");
  const [_addr3Error, setAddr3Error] = useState<boolean>(false);
  const [_addr3HelperText, setAddr3HelperText] = useState<string>("");
  const [_company1Error, setCompany1Error] = useState<boolean>(false);
  const [_company1HelperText, setCompany1HelperText] = useState<string>("");
  const [_company2Error, setCompany2Error] = useState<boolean>(false);
  const [_company2HelperText, setCompany2HelperText] = useState<string>("");

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const apiCallProcess = useApiCallProcess(ApiCallStatus.Idle);

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
    callback.toConfirm(_formData);
    //apiCallProcess.toShouldRun();
  };

  const nameInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.name = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "name");
    }
  };
  const kanaInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.kana = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "kana");
    }
  };
  const firstNameInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.firstName = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "firstName");
    }
  };
  const firstNameKanaInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.firstNameKana = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "firstNameKana");
    }
  };
  const zipInputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.zip = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "zip");
    }
  };
  const prefInputCallback: SelectInputCallback = {
    onChange: (event): void => {
      _formData.pref = event.target.value;
      setFormData(_formData);
      callback.shouldClearResponseError(ModelType.AddressDestination, "pref");
    }
  };
  const addr1InputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.addr1 = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "addr1");
    }
  };
  const addr2InputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.addr2 = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "addr2");
    }
  };
  const addr3InputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.addr3 = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "addr3");
    }
  };
  const company1InputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.company1 = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "company1");
    }
  };
  const company2InputCallback: TextInputCallback = {
    onBlur: (event): void => {
      _formData.company2 = event.target.value;
      setFormData(_formData);
    },
    onChange: (): void => {
      callback.shouldClearResponseError(ModelType.AddressDestination, "company2");
    }
  };

  const validate = (
    value: textInputValueType,
    target: TextInputValidatorTarget
  ): TextInputValidatorResult => {
    const validator = validatorClass();
    const inspector = validator.getTextInputInspect(target);
    return inspector(value);
  };

  const getValidatorTarget = (
    label: string,
    param: TextInputValidatorParam
  ): TextInputValidatorTarget => {
    const target: TextInputValidatorTarget = {};
    if (param.required) {
      target.required = {
        message: `${label}は必須入力です`
      };
    }
    if (param.length) {
      target.lengthEqual = {
        message: `${label}は、${param.length}文字で入力してください`,
        length: param.length
      };
    }
    if (param.min) {
      target.lengthMin = {
        message: `${label}は、${param.min}文字以上で入力してください`,
        min: param.min
      };
    }
    if (param.max) {
      target.lengthMax = {
        message: `${label}は、${param.max}文字以内で入力してください`,
        max: param.max
      };
    }
    if (param.pattern) {
      target.format = {
        message: `${label}は、正しい形式ではありません`,
        pattern: param.pattern
      };
    }
    return target;
  };

  /**
   * name Validator
   */
  const nameInputValidator = (): TextInputValidator => {
    const label = AddressLabelData.name;
    const target = getValidatorTarget(label, {
      required: true,
      max: 20
    });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setNameError(!validateResult.isValid);
      setNameHelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * kana Validator
   */
  const kanaInputValidator = (): TextInputValidator => {
    const label = AddressLabelData.kana;
    const target = getValidatorTarget(label, {
      required: true,
      max: 20
    });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setKanaError(!validateResult.isValid);
      setKanaHelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * firstName Validator
   */
  const firstNameInputValidator = (): TextInputValidator => {
    const label = AddressLabelData.firstName;
    const target = getValidatorTarget(label, {
      required: true,
      max: 20
    });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setFirstNameError(!validateResult.isValid);
      setFirstNameHelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * firstNameKana Validator
   */
  const firstNameKanaInputValidator = (): TextInputValidator => {
    const label = AddressLabelData.firstNameKana;
    const target = getValidatorTarget(label, {
      required: true,
      max: 20
    });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setFirstNameKanaError(!validateResult.isValid);
      setFirstNameKanaHelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * zip Validator
   */
  const zipInputValidator = (): TextInputValidator => {
    const label = AddressLabelData.zip;
    const target = getValidatorTarget(label, {
      required: true,
      length: 7,
      pattern: /^\d*$/
    });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setZipError(!validateResult.isValid);
      setZipHelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * addr1 Validator
   */
  const addr1InputValidator = (): TextInputValidator => {
    const label = AddressLabelData.addr1;
    const target = getValidatorTarget(label, { required: true, max: 12 });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setAddr1Error(!validateResult.isValid);
      setAddr1HelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * addr2 Validator
   */
  const addr2InputValidator = (): TextInputValidator => {
    const label = AddressLabelData.addr2;
    const target = getValidatorTarget(label, { required: true, max: 15 });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setAddr2Error(!validateResult.isValid);
      setAddr2HelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * addr3 Validator
   */
  const addr3InputValidator = (): TextInputValidator => {
    const label = AddressLabelData.addr3;
    const target = getValidatorTarget(label, { max: 16 });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setAddr3Error(!validateResult.isValid);
      setAddr3HelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * company1 Validator
   */
  const company1InputValidator = (): TextInputValidator => {
    const label = AddressLabelData.company1;
    const target = getValidatorTarget(label, { max: 25 });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setCompany1Error(!validateResult.isValid);
      setCompany1HelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };
  /**
   * company2 Validator
   */
  const company2InputValidator = (): TextInputValidator => {
    const label = AddressLabelData.company2;
    const target = getValidatorTarget(label, { max: 25 });

    const inspect = (value: textInputValueType): TextInputValidatorResult => {
      const validateResult = validate(value, target);
      setCompany2Error(!validateResult.isValid);
      setCompany2HelperText(
        validateResult.isValid ? "" : validateResult.message || ""
      );
      return validateResult;
    };

    return {
      targetEvent: TextInputValidatorEventType.Blur,
      inspect: inspect
    };
  };

  // error
  const nameError = (): boolean => {
    return _nameError;
  };
  const kanaError = (): boolean => {
    return _kanaError;
  };
  const firstNameError = (): boolean => {
    return _firstNameError;
  };
  const firstNameKanaError = (): boolean => {
    return _firstNameKanaError;
  };
  const zipError = (): boolean => {
    return _zipError;
  };
  const addr1Error = (): boolean => {
    return _addr1Error;
  };
  const addr2Error = (): boolean => {
    return _addr2Error;
  };
  const addr3Error = (): boolean => {
    return _addr3Error;
  };
  const company1Error = (): boolean => {
    return _company1Error;
  };
  const company2Error = (): boolean => {
    return _company2Error;
  };

  // helperText
  const nameHelperText = (): string => {
    return _nameHelperText;
  };
  const kanaHelperText = (): string => {
    return _kanaHelperText;
  };
  const firstNameHelperText = (): string => {
    return _firstNameHelperText;
  };
  const firstNameKanaHelperText = (): string => {
    return _firstNameKanaHelperText;
  };
  const zipHelperText = (): string => {
    return _zipHelperText;
  };
  const addr1HelperText = (): string => {
    return _addr1HelperText;
  };
  const addr2HelperText = (): string => {
    return _addr2HelperText;
  };
  const addr3HelperText = (): string => {
    return _addr3HelperText;
  };
  const company1HelperText = (): string => {
    return _company1HelperText;
  };
  const company2HelperText = (): string => {
    return _company2HelperText;
  };

  return {
    nameInputCallback,
    kanaInputCallback,
    firstNameInputCallback,
    firstNameKanaInputCallback,
    zipInputCallback,
    prefInputCallback,
    addr1InputCallback,
    addr2InputCallback,
    addr3InputCallback,
    company1InputCallback,
    company2InputCallback,
    nameInputValidator,
    kanaInputValidator,
    firstNameInputValidator,
    firstNameKanaInputValidator,
    zipInputValidator,
    addr1InputValidator,
    addr2InputValidator,
    addr3InputValidator,
    company1InputValidator,
    company2InputValidator,
    nameError,
    kanaError,
    firstNameError,
    firstNameKanaError,
    zipError,
    addr1Error,
    addr2Error,
    addr3Error,
    company1Error,
    company2Error,
    nameHelperText,
    kanaHelperText,
    firstNameHelperText,
    firstNameKanaHelperText,
    zipHelperText,
    addr1HelperText,
    addr2HelperText,
    addr3HelperText,
    company1HelperText,
    company2HelperText,
    errorAlertDialogCallback,
    errorResponse,
    isRunning,
    onSubmit
  };
};
