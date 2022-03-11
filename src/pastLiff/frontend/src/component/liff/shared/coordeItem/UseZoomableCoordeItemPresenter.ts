import { ZoomableCoordeItemViewData } from "./viewData/ZoomableCoordeItemViewData";
import { CoordeItemViewData } from "./viewData/CoordeItemViewData";
import { ItemModalViewData } from "../itemModal/viewData/ItemModalViewData";

export interface ZoomableCoordeItemPresenter {
  coordeItemViewData: () => CoordeItemViewData;
  itemModalViewData: () => ItemModalViewData;
}

export const useZoomableCoordeItemPresenter = (
  viewData: ZoomableCoordeItemViewData,
  isShow: boolean
): ZoomableCoordeItemPresenter => {
  /**
   * コーデのViewDataを生成
   */
  const coordeItemViewData = (): CoordeItemViewData => {
    return {
      itemName: viewData.itemName,
      itemPath: viewData.itemPath,
      isPurchased: viewData.isPurchased,
      maskTitle: maskTitle
    };
  };

  /**
   * モーダルのViewDataを生成
   */
  const itemModalViewData = (): ItemModalViewData => {
    return {
      itemName: viewData.itemName,
      itemPath: viewData.itemPath,
      itemColor: viewData.itemColor,
      isShow: isShow
    };
  };

  /**
   * 購入済みのときのマスクに表示される文言
   */
  const maskTitle = (): string => {
    return "購入済み";
  };

  return { coordeItemViewData, itemModalViewData };
};
