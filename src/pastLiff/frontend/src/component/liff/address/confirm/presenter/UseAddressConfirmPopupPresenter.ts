import { StickAlertViewData } from "../../../shared/stickAlert/viewData/StickAlertViewData";
import { InitializingLoaderViewData } from "../../../../shared/transitions/loader/viewData/InitializingLoaderViewData";

export interface AddressConfirmPopupPresenter {
  stickAlertViewData: () => StickAlertViewData;
  initializingLoaderViewData: () => InitializingLoaderViewData;
}

export const useAddressConfirmPopupPresenter = (
  open: boolean
): AddressConfirmPopupPresenter => {
  const initializingLoaderViewData = (): InitializingLoaderViewData => {
    return {
      label: "処理中です.."
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

  return {
    stickAlertViewData,
    initializingLoaderViewData
  };
};
