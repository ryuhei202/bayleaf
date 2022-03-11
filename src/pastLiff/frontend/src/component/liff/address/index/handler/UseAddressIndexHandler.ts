import { AddressIndexCallback } from "../callback/AddressIndexCallback";
import { useAddressGetApi } from "../../../../../model/liff/address/call_api/UseAddressGetApi";
import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import AddressGetResponse from "../../../../../model/api/response/liff/address/AddressGetResponse";
import { useState, useEffect } from "react";
import { useAddressOptionsGetApi } from "../../../../../model/liff/address/call_api/UseAddressOptionsGetApi";
import AddressOptionsGetResponse from "../../../../../model/api/response/liff/address/AddressOptionsGetResponse";
import { AddressMemberCallback } from "../../member/callback/AddressMemberCallback";
import { AddressConfirmCallback } from "../../confirm/callback/AddressConfirmCallback";
import { AddressDestinationCallback } from "../../destination/callback/AddressDestinationCallback";

export interface AddressMemberHandler {
  callback: () => AddressIndexCallback;
  memberCallback: () => AddressMemberCallback;
  destCallback: () => AddressDestinationCallback;
  confirmCallback: () => AddressConfirmCallback;
}

export const useAddressIndexHandler = (
  callback: AddressIndexCallback
): AddressMemberHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  const addressIndexCallback = () => {
    return callback;
  };
  const memberCallback = () => {
    return {
      shouldRenewMember: callback.shouldRenewMember,
      shouldClearResponseError: callback.shouldClearResponseError
    };
  };
  const destCallback = () => {
    return {
      shouldRenewDestination: callback.shouldRenewDestination,
      shouldClearResponseError: callback.shouldClearResponseError
    };
  };
  const confirmCallback = () => {
    return {
      shouldRenewDeliveryTime: callback.shouldRenewDeliveryTime,
      onError: callback.onError
    };
  };

  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_addressLoaded, setAddressLoaded] = useState<boolean>(false);
  const [_optionsLoaded, setOptionsLoaded] = useState<boolean>(false);

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const addressGetApi = useAddressGetApi();
  const addressOptionsGetApi = useAddressOptionsGetApi();
  const apiCallProcess = useApiCallProcess(
    _addressLoaded && _optionsLoaded
      ? ApiCallStatus.Idle
      : ApiCallStatus.ShouldRun
  );

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    if (_addressLoaded && _optionsLoaded) {
      apiCallProcess.toIdle();
    }
    if (apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      // 入力フォームの初期化処理に影響するため、optionsを先に取得しておく
      addressOptionsGetApi
        .get()
        .then((response: AddressOptionsGetResponse) => {
          callback.onOptionsLoad({
            prefs: response.prefs,
            timeChoices: response.time_choices,
            loaded: true
          });
          setOptionsLoaded(true);
        })
        .catch(error => {
          apiCallProcess.toError(error);
        });
      apiCallProcess.toRunning();

      addressGetApi
        .get()
        .then((response: AddressGetResponse) => {
          callback.onLoad({
            member: response.member,
            dest: response.dest,
            time: response.time
          });
          setAddressLoaded(true);
        })
        .catch(error => {
          apiCallProcess.toError(error);
        });
      apiCallProcess.toRunning();
    }
  }, [addressGetApi, apiCallProcess, callback, _addressLoaded, _optionsLoaded]);

  return {
    callback: addressIndexCallback,
    memberCallback: memberCallback,
    destCallback: destCallback,
    confirmCallback: confirmCallback
  };
};
