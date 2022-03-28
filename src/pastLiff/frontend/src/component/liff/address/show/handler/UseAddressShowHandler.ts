import { useEffect } from "react";
import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import AddressGetResponse from "../../../../../model/api/response/liff/address/AddressGetResponse";
import { useAddressGetApi } from "../../../../../model/liff/address/call_api/UseAddressGetApi";
import { AddressMemberGetCallback } from "../../member/callback/AddressMemberGetCallback";

export interface AddressMemberHandler {
  getAddress: () => void;
}

export const useAddressShowHandler = (
  callback: AddressMemberGetCallback
): AddressMemberHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * AddressMemberFromのコールバックを返す
   */
  const addressGetApi = useAddressGetApi();
  const apiCallProcess = useApiCallProcess(ApiCallStatus.ShouldRun);

  const getAddress = () => {
    apiCallProcess.toShouldRun();
  };

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    if (apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      addressGetApi
        .get()
        .then((response: AddressGetResponse) => {
          apiCallProcess.toIdle();
          callback.onSucceeded(response);
        })
        .catch(error => {
          apiCallProcess.toError(error);
        });
      apiCallProcess.toRunning();
    }
  }, [addressGetApi, apiCallProcess, callback]);

  return {
    getAddress: getAddress
  };
};
