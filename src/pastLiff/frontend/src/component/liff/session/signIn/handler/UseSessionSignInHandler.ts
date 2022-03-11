import { SessionSignInFormCallback } from "../callback/SessionSignInFormCallback";
import { SessionSignInCallback } from "../callback/SessionSignInCallback";

export interface SessionSignInHandler {
  sessionSignInFromCallback: () => SessionSignInFormCallback;
}

export const useSessionSignInHandler = (
  callback: SessionSignInCallback
): SessionSignInHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * SignInFromのコールバックを返す
   */
  const sessionSignInFromCallback = (): SessionSignInFormCallback => {
    return {
      onSignIn: callback.onSignIn
    };
  };

  return { sessionSignInFromCallback };
};
