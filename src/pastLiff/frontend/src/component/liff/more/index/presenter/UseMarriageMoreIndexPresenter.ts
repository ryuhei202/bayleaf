import { MenuViewData } from "../viewData/MenuViewData";
import { MenuGroupData } from "../../../../../model/liff/more/data/MenuGroupData";
import { MenuItemDefinition } from "../../../../../model/liff/more/data/MenuItemDefinition";

export interface MarriageMoreIndexPresenter {
  viewData: () => MenuViewData;
}

export const useMarriageMoreIndexPresenter = (): MarriageMoreIndexPresenter => {
  // ----------------------------------------
  // Private
  // ----------------------------------------
  const groupList = (): MenuGroupData[] => {
    return [
      {
        menuItems: [
          MenuItemDefinition.Shared.deliveryStatus,
          MenuItemDefinition.Shared.coordinate,
          MenuItemDefinition.Shared.uploadPhoto,
          MenuItemDefinition.Marriage.faq,
          MenuItemDefinition.Marriage.inquiry,
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
        ],
      },
      {
        menuItems: [
          MenuItemDefinition.Shared.suspend,
          MenuItemDefinition.Marriage.changeCoorde,
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
      title: "婚活leeap",
      groups: groupList(),
    };
  };

  return { viewData };
};
