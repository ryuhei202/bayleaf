import { useGetClient } from "../../../api/client/UseGetClient";
import AddressOptionsGetResponse from "../../../api/response/liff/address/AddressOptionsGetResponse";
import { UseAddressOptionsGetRequest } from "../../../api/request/liff/address/UseAddressOptionsGetRequest";

export interface UseAddressOptionsGetApi {
  get: () => Promise<AddressOptionsGetResponse>;
}

export const useAddressOptionsGetApi = (): UseAddressOptionsGetApi => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const request = UseAddressOptionsGetRequest();
  const client = useGetClient<AddressOptionsGetResponse>(request);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 処理実行
   */
  const get = (): Promise<AddressOptionsGetResponse> => {
    return client.get();
  };

  return { get };
};
