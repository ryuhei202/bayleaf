import { useApiCallProcess } from "../../../../../model/api/shared/UseApiCallProcess";
import { ApiCallStatus } from "../../../../../model/api/shared/ApiCallStatus";
import { useEffect } from "react";
import ErrorResponse from "../../../../../model/api/response/shared/ErrorResponse";
import AddressFormData from "../shared/AddressFormData";
import { useAddressPatchApi } from "../../../../../model/liff/address/call_api/UseAddressPatchApi";
import { AddressConfirmPopupStatusType } from "../shared/AddressConfirmPopupStatusType";

export interface AddressConfirmPopupHandler {
  errorResponse: () => ErrorResponse | null;
  isRunning: () => boolean;
  onPopupClose: () => void;
  onSubmit: () => void;
}

export const useAddressConfirmPopupHandler = (
  onStatusChanged: (status: AddressConfirmPopupStatusType) => void,
  onClose: () => void,
  onError: (errorResponse: ErrorResponse | null) => void,
  formData: AddressFormData
): AddressConfirmPopupHandler => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const addressPatchApi = useAddressPatchApi(formData);
  const apiCallProcess = useApiCallProcess(ApiCallStatus.Idle);

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    //PatchAddressMemberApi = useAddressMemberPatchApi(formData);

    if (apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      addressPatchApi
        .response()
        .then(() => {
          apiCallProcess.toIdle();
          //callback.toConfirm(_formData);
          onStatusChanged(AddressConfirmPopupStatusType.Succeeded);
          onError(null);
        })
        .catch(error => {
          apiCallProcess.toError(error);
          onStatusChanged(AddressConfirmPopupStatusType.Failed);
          onError(error);
        });
      apiCallProcess.toRunning();
      onStatusChanged(AddressConfirmPopupStatusType.Processing);
    }
  }, [addressPatchApi, apiCallProcess]);

  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * エラーレスポンス
   */
  const errorResponse = (): ErrorResponse | null => {
    return apiCallProcess.errorResponse();
  };

  /**
   * 通信中か
   */
  const isRunning = (): boolean => {
    return apiCallProcess.isRunning();
  };

  /**
   * ログインボタンを押した時のイベント
   */
  const onSubmit = (): void => {
    apiCallProcess.toShouldRun();
  };

  const onPopupClose = (): void => {
    onClose();
  };

  return {
    errorResponse,
    isRunning,
    onPopupClose,
    onSubmit
  };
};
