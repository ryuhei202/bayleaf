import { MenuItemCallback } from "../callback/MenuItemCallback";
import { useContext } from "react";
import { OpenWindowContext } from "../../../../../model/liff/shared/context/OpenWindowContext";

export interface MenuGroupHandler {
  menuItemCallback: () => MenuItemCallback;
}

export const useMenuGroupHandler = (): MenuGroupHandler => {
  // ----------------------------------------
  // context
  // ----------------------------------------
  const openWindowContext = useContext(OpenWindowContext);

  // ----------------------------------------
  // public
  // ----------------------------------------

  /**
   * コールバックを生成
   */
  const menuItemCallback = (): MenuItemCallback => {
    return {
      onClickMenu: onClickMenu // 閉じる関数をコールバックで渡す
    };
  };

  // ----------------------------------------
  // event
  // ----------------------------------------
  /**
   * 返却予約を完了する
   */
  const onClickMenu = (link: string): void => {
    openWindowContext(link);
  };

  return {
    menuItemCallback
  };
};
