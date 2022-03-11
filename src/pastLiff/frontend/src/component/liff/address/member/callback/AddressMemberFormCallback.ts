import { AddressMemberFormData } from "../viewData/AddressMemberFormData";

export interface AddressMemberFormCallback {
  toConfirm: (data: AddressMemberFormData) => void;
  shouldClearResponseError: (model: string, attr: string) => void;
}
