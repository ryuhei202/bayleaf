import {AddressMemberFormData} from "../viewData/AddressMemberFormData";

export interface AddressMemberCallback {
  shouldRenewMember: (formData: AddressMemberFormData) => void;
  shouldClearResponseError: (model: string, attr: string) => void;
}
