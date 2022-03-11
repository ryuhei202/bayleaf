import { AddressMemberFormCallback } from "../callback/AddressMemberFormCallback";
import { useNavigate } from "react-router-dom";
import { AddressMemberFormData } from "../viewData/AddressMemberFormData";
import { AddressMemberCallback } from "../callback/AddressMemberCallback";

export interface AddressMemberHandler {
  addressMemberFormCallback: () => AddressMemberFormCallback;
}

export const useAddressMemberHandler = (
  callback: AddressMemberCallback
): AddressMemberHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * AddressMemberFromのコールバックを返す
   */
  const navigate = useNavigate();

  const toConfirm = (data: AddressMemberFormData) => {
    callback.shouldRenewMember(data);
    navigate("/address/confirm");
  };
  const addressMemberFormCallback = (): AddressMemberFormCallback => {
    return {
      toConfirm: toConfirm,
      shouldClearResponseError: callback.shouldClearResponseError,
    };
  };

  return {
    addressMemberFormCallback: addressMemberFormCallback,
  };
};
