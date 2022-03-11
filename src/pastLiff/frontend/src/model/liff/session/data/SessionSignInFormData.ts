export interface SessionSignInFormData {
  email: string;
  password: string;
  saveSession: boolean;
}

export const SessionSignInFormDefaultContent: SessionSignInFormData = {
  email: "",
  password: "",
  saveSession: true
};
