import { ReturnTutorialData } from "../../../../../../model/liff/return/data/ReturnTutorialData";
import { ReturnTutorialItemViewData } from "../viewData/ReturnTutorialItemViewData";
import { ReturnTutorialBeforeLeadViewData } from "../viewData/ReturnTutorialBeforeLeadViewData";
import { SwiperViewData } from "../../../../shared/swiper/viewData/SwiperViewData";
import { ReturnReserveType } from "../../../shared/ReturnReserveType";
import { ReturnTutorialEndLinkViewData } from "../viewData/ReturnTutorialEndLinkViewData";

export interface ReturnTutorialPresenter {
  tutorialItemViewDatas: () => ReturnTutorialItemViewData[];
  tutorialBeforeLeadViewDatas: () => ReturnTutorialBeforeLeadViewData[];
  tutorialEndLinkViewData: () => ReturnTutorialEndLinkViewData;
  swiperViewData: () => SwiperViewData;
  endStep: () => boolean;
}

export const useReturnTutorialPresenter = (
  tutorials: ReturnTutorialData[],
  tutorialBeforeLeads: string[],
  returnReserveType: ReturnReserveType,
  currentStep: number
): ReturnTutorialPresenter => {
  /**
   * tutorialItemViewDatasを生成
   */
  const tutorialItemViewDatas = (): ReturnTutorialItemViewData[] => {
    return tutorials.map(tutorial => {
      return {
        stepId: tutorial.stepId,
        stepHeader: tutorial.stepHeader,
        stepImagePath: tutorial.stepImagePath,
        stepBody: tutorial.stepBody
      };
    });
  };

  /**
   * tutorialBeforeLeadViewDatasを生成
   */
  const tutorialBeforeLeadViewDatas = (): ReturnTutorialBeforeLeadViewData[] => {
    return tutorialBeforeLeads.map(tutorialBeforeLead => {
      return {
        tutorialBeforeLead: tutorialBeforeLead
      };
    });
  };

  /**
   * TutorialEndLinkViewDataを生成
   */
  const tutorialEndLinkViewData = (): ReturnTutorialEndLinkViewData => {
    return {
      endStep: endStep(),
      endMessage: tutorialEndMessage()
    };
  };

  /**
   * SwiperViewDataを生成
   */
  const swiperViewData = (): SwiperViewData => {
    return {
      padding: "0 24px",
      activeStep: currentStep,
      maxSteps: maxSteps()
    };
  };

  /**
   * ステップの最大数を返す
   */
  const maxSteps = (): number => {
    return tutorials.length + 1; // ステップの前にチュートリアル導入があるので+1する
  };

  /**
   * ステップが最後のステップのとき
   */
  const endStep = (): boolean => {
    return maxSteps() - 1 == currentStep;
  };

  /**
   * ステップ最後の文言出しわけ
   */
  const tutorialEndMessage = (): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "返却用QRコード発行にすすむ";
      case ReturnReserveType.SevenEleven:
        return "返却用バーコード発行にすすむ";
      case ReturnReserveType.YamatoShuka:
        return "集荷日時の指定にすすむ";
      case ReturnReserveType.YamatoSend:
        return "返却用QRコード発行にすすむ";
      case ReturnReserveType.Pudo:
        return "返却用QRコード発行にすすむ";
    }
  };

  return {
    tutorialItemViewDatas,
    tutorialBeforeLeadViewDatas,
    tutorialEndLinkViewData,
    swiperViewData,
    endStep
  };
};
