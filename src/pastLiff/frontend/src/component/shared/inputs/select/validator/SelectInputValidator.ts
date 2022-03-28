import {SelectInputViewData} from "../viewData/SelectInputViewData";

export enum SelectInputValidatorEventType {
  Change = "onChange",
  Blur = "onBlur",
}

export interface SelectInputValidatorResult {
  isValid: boolean,
  message: string | null,
}

export const SelectInputValidatorResultDefault = {
  isValid: true,
  message: null,
};

export interface SelectInputValidatorParam {
  required?: boolean,
}

export interface SelectInputValidatorTarget {
  required?: {
    message: string,
  },
}

export interface SelectInputValidatorInspect {
  (value: SelectInputViewData): SelectInputValidatorResult;
}

export interface SelectInputValidator {
  targetEvent: SelectInputValidatorEventType.Change | SelectInputValidatorEventType.Blur,
  inspect: SelectInputValidatorInspect,
}
