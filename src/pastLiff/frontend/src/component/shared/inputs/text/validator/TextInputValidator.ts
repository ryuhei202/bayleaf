import {textInputValueType} from "../viewData/TextInputViewData";

export enum TextInputValidatorEventType {
  Change = "onChange",
  Blur = "onBlur",
}

export interface TextInputValidatorResult {
  isValid: boolean,
  message: string | null,
}

export const TextInputValidatorResultDefault = {
  isValid: true,
  message: null,
};

export interface TextInputValidatorParam {
  required?: boolean,
  length?: number,
  min?: number,
  max?: number,
  pattern?: RegExp,
}

export interface TextInputValidatorTarget {
  required?: {
    message: string,
  },
  lengthEqual?: {
    message: string,
    length: number,
  },
  lengthMin?: {
    message: string,
    min: number,
  },
  lengthMax?: {
    message: string,
    max: number,
  },
  format?: {
    message: string,
    pattern: RegExp,
  },
}

export interface TextInputValidatorInspect {
  (value: textInputValueType): TextInputValidatorResult;
}

export interface TextInputValidator {
  targetEvent: TextInputValidatorEventType.Change | TextInputValidatorEventType.Blur,
  inspect: TextInputValidatorInspect,
}
