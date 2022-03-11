import { useNavigate } from "react-router-dom";
import { PasswordResetFormCallback } from "../callback/PasswordResetFormCallback";

export interface passwordResetHandler {
  passwordResetFromCallback: () => PasswordResetFormCallback;
}

export const usePasswordResetHandler = (): passwordResetHandler => {
  // ----------------------------------------
  // public
  // ----------------------------------------
  /**
   * PasswordResetFromのコールバックを返す
   */
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/password/reset-requested");
  };

  const passwordResetFromCallback = (): PasswordResetFormCallback => {
    return {
      onSubmit: onSubmit,
    };
  };

  return { passwordResetFromCallback };
};
