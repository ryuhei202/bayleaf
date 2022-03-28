import { useState } from "react";
import { StickAlertCallback } from "../callback/StickAlertCallback";

export interface StickAlertHandler {
  open: () => boolean;
  onOpen: () => void;
  onCancel: () => void;
  stickAlertCallback: () => StickAlertCallback;
}

export const useStickAlertHandler = (): StickAlertHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * パネルの開閉を管理するステート
   */
  const [_open, setOpen] = useState<boolean>(false);

  /**
   * 現在のパネルの開閉状態を返す
   */
  const open = (): boolean => {
    return _open;
  };

  /**
   * コールバックを生成
   */
  const stickAlertCallback = (): StickAlertCallback => {
    return {
      onCancel: onCancel
    };
  };

  // ----------------------------------------
  // event
  // ----------------------------------------
  /**
   * 返却予約を開くハンドラー
   */
  const onOpen = (): void => {
    openStick();
  };

  /**
   * 返却予約を閉じるハンドラー
   */
  const onCancel = (): void => {
    closeStick();
  };

  // ----------------------------------------
  // private
  // ----------------------------------------
  /**
   * パネルを開く
   */
  const openStick = (): void => {
    setOpen(true);
  };

  /**
   * パネルを閉じる
   */
  const closeStick = (): void => {
    setOpen(false);
  };

  return {
    open,
    onOpen,
    onCancel,
    stickAlertCallback
  };
};
