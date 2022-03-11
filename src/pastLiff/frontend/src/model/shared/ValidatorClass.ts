import {
  TextInputValidatorInspect,
  TextInputValidatorResultDefault,
  TextInputValidatorTarget
} from "../../component/shared/inputs/text/validator/TextInputValidator";
import { textInputValueType } from "../../component/shared/inputs/text/viewData/TextInputViewData";

interface ValidatorClass {
  required: (value: string) => boolean;
  format: (value: string, pattern: RegExp) => boolean;
  lengthEqual: (value: string, length: number) => boolean;
  lengthMin: (value: string, min: number) => boolean;
  lengthMax: (value: string, max: number) => boolean;
  getTextInputInspect: (
    target: TextInputValidatorTarget
  ) => TextInputValidatorInspect;
}

export const validatorClass = () : ValidatorClass => {
  /**
   * 必須チェック
   */
  const required = (value: string) => {
    return !!value;
  };

  /**
   * フォーマットチェック
   */
  const format = (value: string, pattern: RegExp) => {
    return pattern.test(value.toString());
  };

  /**
   * 文字列長チェック
   */
  const lengthEqual = (value: string, length: number) => {
    return value.length === length;
  };

  /**
   * 文字列長（最小）チェック
   */
  const lengthMin = (value: string, min: number) => {
    return min <= value.length;
  };

  /**
   * 文字列長（最大）チェック
   */
  const lengthMax = (value: string, max: number) => {
    return value.length <= max;
  };

  /**
   * textInput用のvalidatorを取得
   */
  const getTextInputInspect = (
    target: TextInputValidatorTarget
  ): TextInputValidatorInspect => {
    return (value: textInputValueType) => {
      const text = typeof value === "number" ? value.toString() : value;
      if (target.required && !required(text)) {
        return { isValid: false, message: target.required.message };
      }
      if(value) {
        if (target.format && !format(text, target.format.pattern)) {
          return { isValid: false, message: target.format.message };
        }
        if (target.lengthEqual && !lengthEqual(text, target.lengthEqual.length)) {
          return { isValid: false, message: target.lengthEqual.message };
        }
        if (target.lengthMin && !lengthMin(text, target.lengthMin.min)) {
          return { isValid: false, message: target.lengthMin.message };
        }
        if (target.lengthMax && !lengthMax(text, target.lengthMax.max)) {
          return { isValid: false, message: target.lengthMax.message };
        }
      }
      return TextInputValidatorResultDefault;
    }
  };

  return { required, format, lengthEqual, lengthMin, lengthMax, getTextInputInspect };
};
