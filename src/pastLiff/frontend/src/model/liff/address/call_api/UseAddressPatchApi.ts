import { usePatchClient } from "../../../api/client/UsePatchClient";
import {
  UseAddressPatchRequest
} from "../../../api/request/liff/address/UseAddressMemberPatchRequest";
import AddressGetResponse from "../../../api/response/liff/address/AddressGetResponse";
import AddressFormData from "../../../../component/liff/address/confirm/shared/AddressFormData";

export interface UseAddressPatchApi {
  response: () => Promise<AddressGetResponse>;
}

export const useAddressPatchApi = (
  formData: AddressFormData
): UseAddressPatchApi => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const request = UseAddressPatchRequest(formData);
  const client = usePatchClient<AddressGetResponse>(request);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 処理実行
   */
  const response = (): Promise<AddressGetResponse> => {
    return client.patch();
  };

  return { response };
};
