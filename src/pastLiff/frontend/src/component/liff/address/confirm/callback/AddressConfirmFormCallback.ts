import { AddressIndexCallback } from "../../index/callback/AddressIndexCallback";

export interface AddressConfirmFormCallback
  extends Pick<AddressIndexCallback, "shouldRenewDeliveryTime"> {
  onPopupOpen: () => void;
}
