import { useGetRequest } from "../useGetRequest";
import { TAddressShowResponse } from "./TAddressShowResponse";

type AddressShow = {
  readonly data?: TAddressShowResponse;
  readonly error: Error | null;
};

export const useAddressShow = (memberId: number): AddressShow => {
  const { data, error } = useGetRequest<TAddressShowResponse>(
    `members/${memberId}/address`
  );
  return {
    data,
    error,
  };
};
