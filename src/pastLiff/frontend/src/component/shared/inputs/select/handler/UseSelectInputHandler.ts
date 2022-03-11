import { useState, useEffect } from "react";
import { selectInputValueType } from "../viewData/SelectInputViewData";

/*
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
 */

export interface SelectInputHandlerInterface {
  onChange: (event: any) => void;
  currentValue: () => selectInputValueType;
}

export const useSelectInputHandler = (
  value: selectInputValueType
): SelectInputHandlerInterface => {
  // チュートリアルのステップを管理するステート
  const [_currentValue, setCurrentValue] = useState<selectInputValueType>(value);

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
  const currentValue = (): selectInputValueType => {
    return _currentValue;
  };

  return { onChange, currentValue };
};
