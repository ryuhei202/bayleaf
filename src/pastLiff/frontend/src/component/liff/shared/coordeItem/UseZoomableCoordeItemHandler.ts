import { useState } from "react";
import { ItemModalCallback } from "../itemModal/callback/ItemModalCallback";

export interface ZoomableCoordeItemHandler {
  isShow: () => boolean;
  onClickItem: () => void;
  itemModalCallback: () => ItemModalCallback;
}

export const useZoomableCoordeItemHandler = (): ZoomableCoordeItemHandler => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  /**
   * モーダルの初期値と更新メソッド
   */
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 表示
   */
  const isShow = (): boolean => {
    return isShowModal;
  };

  /**
   * ItemModalのコールバックを生成
   */
  const itemModalCallback = (): ItemModalCallback => {
    return {
      closeModal: onCloseModal
    };
  };

  // ----------------------------------------
  // Private
  // ----------------------------------------
  /**
   * モーダルをOpenする
   */
  const openModal = (): void => {
    setIsShowModal(true);
  };

  /**
   * モーダルをCloseする
   */
  const closeModal = (): void => {
    setIsShowModal(false);
  };

  // ----------------------------------------
  // Event
  // ----------------------------------------
  const onClickItem = () => {
    openModal();
  };

  const onCloseModal = () => {
    closeModal();
  };

  return { isShow, onClickItem, itemModalCallback };
};
