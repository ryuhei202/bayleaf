import { SessionSignInFormViewData } from "../viewData/SessionSignInFormViewData";
import { SessionSignInFormDefaultContent } from "../../../../../model/liff/session/data/SessionSignInFormData";

export interface UseSessionSignInPresenter {
  signInFormViewData: () => SessionSignInFormViewData;
}

export const useSessionSignInPresenter = (): UseSessionSignInPresenter => {
  /**
   * SessionSignInFormのViewDataの生成
   */
  const signInFormViewData = (): SessionSignInFormViewData => {
    return {
      defaultFormData: SessionSignInFormDefaultContent
    };
  };

  return { signInFormViewData };
};
