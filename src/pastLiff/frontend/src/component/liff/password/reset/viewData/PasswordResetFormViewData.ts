import { PasswordResetData } from "../../../../../model/liff/password/data/PasswordResetData";

export interface PasswordResetFormData
  extends Pick<PasswordResetData, "email"> {}

export const PasswordResetFormDefaultContent: PasswordResetFormData = {
  email: ""
};

export interface PasswordResetFormViewData {
  readonly defaultFormData: PasswordResetFormData;
}
