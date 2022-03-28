import { TDeliveryTime } from "./TDeliveryTime";
import { TMemberAddress } from "./TMemberAddress";
import { TMemberForAddress } from "./TMemberForAddress";

export type TAddressShowResponse = {
  readonly member: TMemberForAddress;
  readonly dest: TMemberAddress;
  readonly time: TDeliveryTime;
};
