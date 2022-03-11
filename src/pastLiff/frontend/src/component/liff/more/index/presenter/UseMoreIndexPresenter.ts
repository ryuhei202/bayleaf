import { MenuViewData } from "../viewData/MenuViewData";
import { MenuGroupData } from "../../../../../model/liff/more/data/MenuGroupData";
import { MenuItemDefinition } from "../../../../../model/liff/more/data/MenuItemDefinition";

export interface MoreIndexPresenter {
  viewData: () => MenuViewData;
}

export const useMoreIndexPresenter = (): MoreIndexPresenter => {
  // ----------------------------------------
  // Private
  // ----------------------------------------
  const groupList = (): MenuGroupData[] => {
    return [
      {
        menuItems: [
          MenuItemDefinition.Shared.deliveryStatus,
          MenuItemDefinition.Shared.coordinate,
          MenuItemDefinition.Leeap.returnItem,
          MenuItemDefinition.Shared.uploadPhoto,
          MenuItemDefinition.Leeap.faq,
          MenuItemDefinition.Leeap.inquiry,
        ],
      },
      {
        menuItems: [
          MenuItemDefinition.Shared.profile,
          MenuItemDefinition.Shared.changePlan,
          MenuItemDefinition.Shared.paymentSetting,
          MenuItemDefinition.Shared.emailSetting,
        ],
      },
      {
        menuItems: [
          MenuItemDefinition.Shared.rentalHistory,
          MenuItemDefinition.Shared.paymentLog,
          MenuItemDefinition.Leeap.pointLog,
        ],
      },
      {
        menuItems: [
          MenuItemDefinition.Leeap.invite,
          MenuItemDefinition.Leeap.feedback,
          MenuItemDefinition.Shared.suspend,
        ],
      },
    ];
  };

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * MenuViewDataの生成
   */
  const viewData = (): MenuViewData => {
    return {
      title: "leeap",
      groups: groupList(),
    };
  };

  return { viewData };
};
