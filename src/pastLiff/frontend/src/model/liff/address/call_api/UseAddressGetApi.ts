import AddressGetResponse from "../../../api/response/liff/address/AddressGetResponse";
import { UseAddressGetRequest } from "../../../api/request/liff/address/UseAddressGetRequest";
import { useGetClient } from "../../../api/client/UseGetClient";

export interface UseAddressGetApi {
  get: () => Promise<AddressGetResponse>;
}

export const useAddressGetApi = (): UseAddressGetApi => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const request = UseAddressGetRequest();
  const client = useGetClient<AddressGetResponse>(request);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 処理実行
   */
  const get = (): Promise<AddressGetResponse> => {
    return client.get();
  };

  return { get };
};
