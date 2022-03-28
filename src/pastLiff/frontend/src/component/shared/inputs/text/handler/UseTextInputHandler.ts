import { useState, useEffect } from "react";
import { textInputValueType } from "../viewData/TextInputViewData";

/*
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
 */

export interface TextInputHandlerInterface {
  onChange: (event: any) => void;
  currentValue: () => textInputValueType;
}

export const useTextInputHandler = (
  value: textInputValueType
): TextInputHandlerInterface => {
  // チュートリアルのステップを管理するステート
  const [_currentValue, setCurrentValue] = useState<textInputValueType>(value);

  useEffect(() => {
    value = _currentValue;
  });

  /**
   * テキスト(value)変更イベント
   */
  const onChange = (event: any): void => {
    //console.debug(event.target.value);
    setCurrentValue(event.target.value);
  };

  /**
   * 現在のテキスト(value)を取得
   */
  const currentValue = (): textInputValueType => {
    return _currentValue;
  };

  return { onChange, currentValue };
};
