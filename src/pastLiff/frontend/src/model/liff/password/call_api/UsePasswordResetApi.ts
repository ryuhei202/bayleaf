import PasswordResetResponse from "../../../api/response/liff/password/PasswordResetResponse";
import { UsePasswordResetRequest } from "../../../api/request/liff/password/UsePasswordResetRequest";
import { usePostClient } from "../../../api/client/UsePostClient";
import { PasswordResetFormData } from "../../../../component/liff/password/reset/viewData/PasswordResetFormViewData";

export interface UsePasswordResetApi {
  response: () => Promise<PasswordResetResponse>;
}

export const UsePasswordReset = (
  form: PasswordResetFormData
): UsePasswordResetApi => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const request = UsePasswordResetRequest(form);
  const client = usePostClient<PasswordResetResponse>(request);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 処理実行
   */
  const response = (): Promise<PasswordResetResponse> => {
    return client.post();
  };

  return { response };
};
