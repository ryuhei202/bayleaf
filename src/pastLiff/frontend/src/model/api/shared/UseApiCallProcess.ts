import { ApiCallStatus } from "./ApiCallStatus";
import ErrorResponse from "../response/shared/ErrorResponse";
import { useState } from "react";

export interface ApiCallProcess {
  status: () => ApiCallStatus;
  errorResponse: () => ErrorResponse | null;
  toIdle: () => void;
  toShouldRun: () => void;
  toRunning: () => void;
  toError: (response: ErrorResponse) => void;
  isRunning: () => boolean;
}

export const useApiCallProcess = (
  initialStatus: ApiCallStatus
): ApiCallProcess => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_status, setStatus] = useState(initialStatus);
  const [_errorResponse, setErrorResponse] = useState<ErrorResponse | null>(
    null
  );

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 状態
   */
  const status = (): ApiCallStatus => {
    return _status;
  };

  /**
   * エラーレスポンス
   */
  const errorResponse = (): ErrorResponse | null => {
    return _errorResponse;
  };

  /**
   * 通常の状態にする
   */
  const toIdle = (): void => {
    setStatus(ApiCallStatus.Idle);
    setErrorResponse(null);
  };

  /**
   * APIコール開始の状態にする
   */
  const toShouldRun = (): void => {
    setStatus(ApiCallStatus.ShouldRun);
    setErrorResponse(null);
  };

  /**
   * 通信中の状態にする
   */
  const toRunning = (): void => {
    setStatus(ApiCallStatus.Running);
    setErrorResponse(null);
  };

  /**
   * エラー状態にする
   */
  const toError = (response: ErrorResponse): void => {
    setStatus(ApiCallStatus.Error);
    setErrorResponse(response);
  };

  /**
   * 通信中か
   */
  const isRunning = (): boolean => {
    return _status === ApiCallStatus.Running;
  };

  return {
    status,
    errorResponse,
    toIdle,
    toShouldRun,
    toRunning,
    toError,
    isRunning
  };
};
