import { MenuGroupViewData } from "../viewData/MenuGroupViewData";
import { MenuItemViewData } from "../viewData/MenuItemViewData";

export interface MenuGroupPresenter {
  menuItemViewDatas: () => MenuItemViewData[];
}

export const useMenuGroupPresenter = (
  viewData: MenuGroupViewData
): MenuGroupPresenter => {
  /**
   * メニューアイテムの配列を返す
   */
  const menuItemViewDatas = (): MenuItemViewData[] => {
    return viewData.menuItems.map(menuItem => {
      return {
        path: menuItem.path,
        name: menuItem.name
      };
    });
  };

  return { menuItemViewDatas };
};
