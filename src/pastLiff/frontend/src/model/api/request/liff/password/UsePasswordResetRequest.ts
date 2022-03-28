import {PasswordResetFormData} from "../../../../../component/liff/password/reset/viewData/PasswordResetFormViewData";

export const UsePasswordResetRequest = (
  formData: PasswordResetFormData
): PatchRequest => {
  const url = (): string => {
    return "liff/api/accounts/request_password_reset";
  };

  const params = (): FormData => {
    const form = new FormData();
    form.append("email", formData.email);
    return form;
  };

  return { url, params };
};
