import { TAddressOptionIndexResponse } from "./TAddressOptionIndexResponse";
import { useGetRequest } from "../useGetRequest";

type AddressOptionsIndex = {
  readonly data?: TAddressOptionIndexResponse;
  readonly error: Error | null;
};
export const useAddressOptionsIndex = (): AddressOptionsIndex => {
  const { data, error } =
    useGetRequest<TAddressOptionIndexResponse>("address_options");

  return {
    data,
    error,
  };
};
