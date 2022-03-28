import { TDeliveryTime } from "./TDeliveryTime";
import { TMemberAddress } from "./TMemberAddress";
import { TMemberForAddress } from "./TMemberForAddress";

export type TAddressUpdateParam = {
  readonly member: TMemberForAddress;
  readonly memberAddress: TMemberAddress;
  readonly memberDeliveryTime: TDeliveryTime;
};
