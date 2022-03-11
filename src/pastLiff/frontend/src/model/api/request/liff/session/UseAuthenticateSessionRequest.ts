import { SessionSignInFormData } from "../../../../liff/session/data/SessionSignInFormData";

export const UseAuthenticateSessionRequest = (
  session: SessionSignInFormData,
  isMarriage: boolean
): PatchRequest => {
  const url = (): string => {
    return "liff/api/sessions/sign_in";
  };

  const params = (): FormData => {
    const form = new FormData();
    form.append("email", session.email);
    form.append("password", session.password);
    form.append("is_marriage", String(isMarriage));
    return form;
  };

  return { url, params };
};
