import { MenuItemData } from "../../../../../model/liff/more/data/MenuItemData";

export interface MenuGroupViewData {
  readonly menuItems: MenuItemData[];
  readonly needDivider: boolean;
}
