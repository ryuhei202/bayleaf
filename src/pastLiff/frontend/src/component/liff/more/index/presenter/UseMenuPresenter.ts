import { MenuGroupViewData } from "../viewData/MenuGroupViewData";
import { MenuGroupData } from "../../../../../model/liff/more/data/MenuGroupData";

export interface MenuPresenter {
  viewDatas: () => MenuGroupViewData[];
}

export const useMenuPresenter = (
  groupDatas: MenuGroupData[]
): MenuPresenter => {
  /**
   * 分割線を出すか
   */
  const needDivider = (index: number): boolean => {
    return groupDatas.length - 1 !== index;
  };

  /**
   * ViewDataの生成
   */
  const viewDatas = (): MenuGroupViewData[] => {
    return groupDatas.map((groupData, index) => {
      return {
        menuItems: groupData.menuItems,
        needDivider: needDivider(index)
      };
    });
  };

  return { viewDatas };
};
