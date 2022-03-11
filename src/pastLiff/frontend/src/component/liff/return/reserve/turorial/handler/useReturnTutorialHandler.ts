import { useState } from "react";
import { SwiperCallback } from "../../../../shared/swiper/callback/SwiperCallback";
import { ReturnTutorialEndLinkCallback } from "../callback/ReturnTutorialEndLinkCallback";
import { ReturnTutorialCallback } from "../callback/ReturnTutorialCallback";

interface ReturnTutorialHandler {
  swiperCallback: () => SwiperCallback;
  tutorialEndLinkCallback: () => ReturnTutorialEndLinkCallback;
  currentStep: () => number;
}

export const useReturnTutorialHandler = (
  returnTutorialCallback: ReturnTutorialCallback
): ReturnTutorialHandler => {
  // スワイパー管理するステート
  const [_currentStep, setCurrentStep] = useState<number>(0);

  /**
   * swiperCallbackを生成
   */
  const swiperCallback = (): SwiperCallback => {
    return {
      onChangeStep: onChangeStep
    };
  };

  /**
   * tutorialEndLinkCallbackを生成
   */
  const tutorialEndLinkCallback = (): ReturnTutorialEndLinkCallback => {
    return {
      onClickEndLink: onClickEndLink
    };
  };

  /**
   * 現在表示しているスワイパーのステップ数
   */
  const currentStep = (): number => {
    return _currentStep;
  };

  /**
   * 現在表示しているスワイパーのステップ数が変更されたらセットし直す
   */
  const onChangeStep = (index: number): void => {
    setCurrentStep(index);
  };

  /**
   * 押されたらチュートリアルを閉じる
   */
  const onClickEndLink = (): void => {
    return returnTutorialCallback.tutorialCompleted();
  };

  return {
    swiperCallback,
    tutorialEndLinkCallback,
    currentStep
  };
};
