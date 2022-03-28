import { useState } from "react";
import { ReturnTutorialCallback } from "../turorial/callback/ReturnTutorialCallback";

export interface ReturnReserveTutorialHandler {
  isTutorialComplete: () => boolean;
  onTutorialCompleted: () => void;
  tutorialCompletedCallback: () => ReturnTutorialCallback;
}

export const useReturnReserveTutorialHandler = (): ReturnReserveTutorialHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * チュートリアルを見たかどうかを管理するステート
   */
  const [tutorialcomplete, setTutorialComplete] = useState<boolean>(false);

  /**
   * チュートリアルを見たことがあるかどうか
   */
  const isTutorialComplete = (): boolean => {
    // @todo 永続化されたチュートリアルを確認済みかどうかの情報を取得する処理が入る
    return tutorialcomplete;
  };

  /**
   * tutorialCompletedのコールバックを生成
   */
  const tutorialCompletedCallback = (): ReturnTutorialCallback => {
    return {
      tutorialCompleted: onTutorialCompleted
    };
  };

  // ----------------------------------------
  // private
  // ----------------------------------------
  /**
   * チュートリアルを見終えたらTrueにする
   */
  const tutorialCompleted = (): void => {
    setTutorialComplete(true);
  };

  // ----------------------------------------
  // event
  // ----------------------------------------
  /**
   * チュートリアル最後のステップで返却予約に進むボタンを押したとき
   */
  const onTutorialCompleted = (): void => {
    tutorialCompleted();
    // @todo 見終わったという情報を永続化する処理が入る
  };

  return { isTutorialComplete, onTutorialCompleted, tutorialCompletedCallback };
};
