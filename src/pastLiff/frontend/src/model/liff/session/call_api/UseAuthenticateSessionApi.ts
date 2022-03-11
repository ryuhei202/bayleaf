import { usePatchClient } from "../../../api/client/UsePatchClient";
import { UseAuthenticateSessionRequest } from "../../../api/request/liff/session/UseAuthenticateSessionRequest";
import { SessionSignInFormData } from "../data/SessionSignInFormData";
import SessionAuthenticateResponse from "../../../api/response/liff/session/SessionAuthenticateResponse";
import { LiffTypeContext } from "../../shared/context/LiffTypeContext";
import { useContext } from "react";
import { LiffType } from "../../../../component/liff/LiffType";

export interface UseGetSessionApi {
  authenticate: () => Promise<SessionAuthenticateResponse>;
}

export const UseAuthenticateSession = (
  form: SessionSignInFormData
): UseGetSessionApi => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const context = useContext(LiffTypeContext);
  const request = UseAuthenticateSessionRequest(
    form,
    LiffType.isForMarriage(context)
  );
  const client = usePatchClient<SessionAuthenticateResponse>(request);

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * 認証実行
   */
  const authenticate = (): Promise<SessionAuthenticateResponse> => {
    return client.patch();
  };

  return { authenticate };
};
