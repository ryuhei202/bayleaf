import { CoordeItem } from "../../../../../model/liff/coorde/data/CoordeItem";
import { ZoomableCoordeItemViewData } from "../../../shared/coordeItem/viewData/ZoomableCoordeItemViewData";
import { ReturnTutorialData } from "../../../../../model/liff/return/data/ReturnTutorialData";
import { ReturnTutorialViewData } from "../turorial/viewData/ReturnTutorialViewData";
import { ConfirmViewData } from "../../../shared/confirm/viewData/ConfirmViewData";
import { StickAlertViewData } from "../../../shared/stickAlert/viewData/StickAlertViewData";
import { ReturnReserveType } from "../../shared/ReturnReserveType";
import { ReturnTutorialList } from "../turorial/shared/ReturnTutorialList";

export interface ReturnReservePresenter {
  coordeItemsViewDatas: () => ZoomableCoordeItemViewData[];
  tutorialViewData: () => ReturnTutorialViewData;
  confirmViewData: () => ConfirmViewData;
  stickAlertViewData: () => StickAlertViewData;
  tutorialComplete: () => boolean;
}

export const useReturnReservePresenter = (
  coordeItems: CoordeItem[],
  returnReserveType: ReturnReserveType,
  isTutorialComplete: boolean,
  open: boolean
): ReturnReservePresenter => {
  /**
   * CoordeItemsViewDatasを生成
   */
  const coordeItemsViewDatas = (): ZoomableCoordeItemViewData[] => {
    return coordeItems.map(coordeItem => {
      return {
        itemId: coordeItem.itemId,
        itemName: coordeItem.itemName,
        itemColor: coordeItem.itemColor,
        itemPath: coordeItem.itemPath,
        isPurchased: coordeItem.isPurchased
      };
    });
  };

  /**
   * TutorialViewDataを生成
   */
  const tutorialViewData = (): ReturnTutorialViewData => {
    return {
      tutorials: tutorials(),
      tutorialsBeforeLead: tutorialsBeforeLead(),
      returnReserveType: returnReserveType
    };
  };

  /**
   * ConfirmViewDataを生成
   */
  const confirmViewData = (): ConfirmViewData => {
    return {
      confirmReserveHeaderText: confirmReserveHeaderText(),
      confirmReserveLeadText: confirmReserveLeadText(),
      confirmReservebuttonFirstText: confirmReservebuttonFirstText(),
      confirmReservebuttonSecondText: confirmReservebuttonSecondText()
    };
  };

  /**
   * StickAlertViewDataを生成
   */
  const stickAlertViewData = (): StickAlertViewData => {
    return {
      open: open
    };
  };

  /**
   * 返却予約確認パネルのヘッダーテキストを返す
   */
  const confirmReserveHeaderText = (): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "返却用QRコードを発行しますか？";
      case ReturnReserveType.SevenEleven:
        return "返却用バーコードを発行しますか？";
      case ReturnReserveType.YamatoSend:
        return "返却用QRコードを発行しますか？";
      case ReturnReserveType.YamatoShuka:
        return "集荷日時を確定しますか？";
      case ReturnReserveType.Pudo:
        return "返却用QRコードを発行しますか？";
    }
  };

  /**
   * 返却予約確認パネルのリードテキストを返す
   */
  const confirmReserveLeadText = (): string => {
    return "いつでも返却方法の変更、キャンセルが可能です。";
  };

  /**
   * 返却予約確認パネルの左側のボタンを返す
   */
  const confirmReservebuttonFirstText = (): string => {
    return "いいえ";
  };

  /**
   * 返却予約確認パネルの右側のボタンを返す
   */
  const confirmReservebuttonSecondText = (): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "発行する";
      case ReturnReserveType.SevenEleven:
        return "発行する";
      case ReturnReserveType.YamatoSend:
        return "発行する";
      case ReturnReserveType.YamatoShuka:
        return "確定する";
      case ReturnReserveType.Pudo:
        return "発行する";
    }
  };

  /**
   * チュートリアルの中身を返却方法にあったチュートリアルで返す
   */
  const tutorials = (): ReturnTutorialData[] => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return ReturnTutorialList.FamilyMart;
      case ReturnReserveType.SevenEleven:
        return ReturnTutorialList.SevenEleven;
      case ReturnReserveType.YamatoSend:
        return ReturnTutorialList.YamatoSend;
      case ReturnReserveType.YamatoShuka:
        return ReturnTutorialList.YamatoShuka;
      case ReturnReserveType.Pudo:
        return ReturnTutorialList.Pudo;
    }
  };

  /**
   * チュートリアルステップ前の説明
   */
  const tutorialsBeforeLead = (): string[] => {
    const tutorialBeforeList: string[] = [
      "進んで返却の流れに従って返却作業に進んで下さい。",
      "返却予約後に別の返却方法への変更も容易にできるようになっています。",
      "返送料は一切かかりません。また、面倒な送り状いらずで簡単返却可能となっております。"
    ];
    return tutorialBeforeList;
  };

  /**
   * チュートリアルを見たことがあるかどうか
   */
  const tutorialComplete = (): boolean => {
    return isTutorialComplete;
  };

  return {
    coordeItemsViewDatas,
    tutorialViewData,
    confirmViewData,
    stickAlertViewData,
    tutorialComplete
  };
};
