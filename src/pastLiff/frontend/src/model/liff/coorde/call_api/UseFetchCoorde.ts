import { usePostFetchCoordeRequest } from "../../../api/request/liff/coorde/UsePostFetchCoordeRequest";
import { usePostClient } from "../../../api/client/UsePostClient";
import { useContext, useEffect } from "react";
import { UserIdContext } from "../../shared/context/UserIdContext";
import {
  ApiCallProcess,
  useApiCallProcess
} from "../../../api/shared/UseApiCallProcess";
import { ApiCallStatus } from "../../../api/shared/ApiCallStatus";

export interface UseFetchCoorde {
  apiCallProcess: () => ApiCallProcess;
}

export const useFetchCoorde = (): UseFetchCoorde => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const lineUserId = useContext(UserIdContext);
  const _apiCallProcess = useApiCallProcess(ApiCallStatus.ShouldRun);

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const request = usePostFetchCoordeRequest(lineUserId);
  const client = usePostClient(request);

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    if (_apiCallProcess.status() === ApiCallStatus.ShouldRun) {
      const fetch = () => {
        client
          .post()
          .then(() => {
            _apiCallProcess.toIdle();
          })
          .catch(error => {
            _apiCallProcess.toError(error);
          });
      };

      _apiCallProcess.toRunning();
      fetch();
    }
  }, [client, _apiCallProcess]);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * APIコールの状態オブジェクトを返す
   */
  const apiCallProcess = (): ApiCallProcess => {
    return _apiCallProcess;
  };

  return { apiCallProcess };
};
