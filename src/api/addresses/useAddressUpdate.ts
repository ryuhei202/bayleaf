import { TDeliveryTime } from "./TDeliveryTime";
import { TMemberAddress } from "./TMemberAddress";
import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePatchRequest } from "../usePatchRequest";
import { TAddressUpdateParam } from "./TAddressUpdateParam";

type AddressUpdate = {
  readonly mutate: UseMutateFunction<TAddressUpdateParam>;
  readonly isLoading: boolean;
};

export const useAddressUpdate = (
  params: TAddressUpdateParam,
  memberId: number
): AddressUpdate => {
  const { mutate, isLoading } = usePatchRequest<
    TAddressUpdateParam,
    TAddressUpdateParam
  >(`members/${memberId}/address`, params);

  return { mutate, isLoading };
};
