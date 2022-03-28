import { MenuGroupData } from "../../../../../model/liff/more/data/MenuGroupData";

export interface MenuViewData {
  readonly title: string;
  readonly groups: MenuGroupData[];
}
