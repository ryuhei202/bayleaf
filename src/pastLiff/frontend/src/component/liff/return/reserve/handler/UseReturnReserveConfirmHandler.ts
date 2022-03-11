import { ConfirmCallback } from "../../../shared/confirm/callback/ConfirmCallback";

export interface ReturnReserveConfirmHandler {
  confirmCallback: () => ConfirmCallback;
}

export const useReturnReserveConfirmHandler = (
  onCancel: () => void
): ReturnReserveConfirmHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------

  /**
   * コールバックを生成
   */
  const confirmCallback = (): ConfirmCallback => {
    return {
      onComplete: onComplete, // 返却予約処理をする関数をコールバックで渡す
      onCancel: onCancel, // 閉じる関数をコールバックで渡す
    };
  };

  // ----------------------------------------
  // private
  // ----------------------------------------
  /**
   * 返却予約処理
   * APIを叩いて成功すれば予約完了画面へ / 失敗したら失敗を表示する
   */
  const doReturnReserve = (): boolean => {
    // @todo ここに処理が入る（エラー時reducer使用予定）
    return false;
  };

  // ----------------------------------------
  // event
  // ----------------------------------------
  /**
   * 返却予約を完了する
   */
  const onComplete = (): void => {
    doReturnReserve();
  };

  return {
    confirmCallback,
  };
};
