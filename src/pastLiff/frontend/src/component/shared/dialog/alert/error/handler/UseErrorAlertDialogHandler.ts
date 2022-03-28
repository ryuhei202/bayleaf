import { ErrorAlertDialogButtonCallback } from "../callback/ErrorAlertDialogButtonCallback";
import { ErrorAlertDialogCallback } from "../callback/ErrorAlertDialogCallback";
import { useEffect, useState } from "react";
import ErrorResponse from "../../../../../../model/api/response/shared/ErrorResponse";
import { AlertDialogCallback } from "../../base/callback/AlertDialogCallback";

export interface ErrorAlertDialogHandler {
  open: () => boolean;
  alertDialogCallback: () => AlertDialogCallback;
  errorAlertDialogButtonCallback: () => ErrorAlertDialogButtonCallback;
}

export const useErrorAlertDialogHandler = (
  errorResponse: ErrorResponse | null,
  callback: ErrorAlertDialogCallback
): ErrorAlertDialogHandler => {
  const [_open, setOpen] = useState(false);

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  useEffect(() => {
    if (errorResponse !== null) {
      setOpen(true);
    }
  }, [errorResponse]);

  // ----------------------------------------
  // Private
  // ----------------------------------------
  /**
   * 閉じる
   */
  const close = (): void => {
    setOpen(false);
  };

  // ----------------------------------------
  // Event
  // ----------------------------------------
  /**
   * エラーダイアログのボタンを押した時のイベント
   */
  const onClickButton = (): void => {
    close();
  };

  /**
   * ダイアログが閉じた時のイベント
   */
  const onExited = (): void => {
    callback.onClose();
    // TODO hooksの引数にステータスコードを渡し、もし403だったらここでログイン画面を出す関数を呼ぶ
  };

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * アラートを開くか
   */
  const open = (): boolean => {
    return _open;
  };

  /**
   * AlertDialogのコールバック生成
   */
  const alertDialogCallback = (): AlertDialogCallback => {
    return {
      onExited: onExited
    };
  };

  /**
   * ボタンのコールバック生成
   */
  const errorAlertDialogButtonCallback = (): ErrorAlertDialogButtonCallback => {
    return {
      onClick: onClickButton
    };
  };

  return { open, alertDialogCallback, errorAlertDialogButtonCallback };
};
