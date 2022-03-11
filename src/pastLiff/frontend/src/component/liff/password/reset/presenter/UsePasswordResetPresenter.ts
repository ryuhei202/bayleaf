import {
  PasswordResetFormDefaultContent,
  PasswordResetFormViewData
} from "../viewData/PasswordResetFormViewData";

export interface UsePasswordResetPresenter {
  passwordResetFormViewData: () => PasswordResetFormViewData;
}

export const usePasswordResetPresenter = (): UsePasswordResetPresenter => {
  /**
   * PasswordResetFormのViewDataの生成
   */
  const passwordResetFormViewData = (): PasswordResetFormViewData => {
    return {
      defaultFormData: PasswordResetFormDefaultContent
    };
  };

  return { passwordResetFormViewData };
};
