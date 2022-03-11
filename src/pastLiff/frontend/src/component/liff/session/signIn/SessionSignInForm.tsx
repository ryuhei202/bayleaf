import React from "react";
import TextInput from "../../../shared/inputs/text/TextInput";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LeeapButton from "../../../shared/LeeapButton";
import { useSessionSignInFormHandler } from "./handler/UseSessionSignInFormHandler";
import { useSessionSignInFormPresenter } from "./presenter/UseSessionSignInFormPresenter";
import CheckboxInput from "../../../shared/inputs/checkbox/CheckboxInput";
import ErrorAlertDialog from "../../../shared/dialog/alert/error/ErrorAlertDialog";
import ProgressDialog from "../../../shared/dialog/progress/ProgressDialog";
import { SessionSignInFormCallback } from "./callback/SessionSignInFormCallback";
import { SessionSignInFormViewData } from "./viewData/SessionSignInFormViewData";
import { Link } from "react-router-dom";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    form: {
      padding: "1rem"
    },
    emailField: {
      marginBottom: "2rem"
    },
    passwordField: {
      marginBottom: "2rem"
    },
    linkWrapper: {
      textAlign: "right",
      fontSize: "12px"
    },
    link: {
      color: "#6e6e6e"
    },
    itemCardSearchIcon: {
      position: "absolute",
      zIndex: 2,
      top: "4px",
      left: "4px"
    },
    actions: {
      padding: ".25rem 0"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface SessionSignInFormProps {
  viewData: SessionSignInFormViewData;
  callback: SessionSignInFormCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const SessionSignInForm = (
  props: SessionSignInFormProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useSessionSignInFormHandler(
    props.viewData.defaultFormData,
    props.callback
  );
  const presenter = useSessionSignInFormPresenter(
    props.viewData.defaultFormData,
    handler.emailError(),
    handler.emailHelperText(),
    handler.passwordError(),
    handler.passwordHelperText(),
    handler.isRunning(),
    handler.errorResponse()
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <React.Fragment>
      <form className={props.classes.form}>
        <div className={props.classes.emailField}>
          <TextInput
            viewData={presenter.emailTextInputViewData()}
            callback={handler.emailInputCallback}
            validator={handler.emailInputValidator()}
          />
        </div>

        <div className={props.classes.linkWrapper}>
          <Link to={"/password/reset"} className={props.classes.link}>
            パスワードがわからない場合
          </Link>
        </div>


        <div className={props.classes.passwordField}>
          <TextInput
            viewData={presenter.passwordTextInputViewData()}
            callback={handler.passwordInputCallback}
            validator={handler.passwordInputValidator()}
          />
        </div>

        <div>
          <CheckboxInput
            viewData={presenter.saveSessionCheckBoxViewData()}
            callback={handler.checkboxInputCallback}
          />
        </div>
        <div className={props.classes.actions}>
          <LeeapButton
            colors="primary"
            size="large"
            fullWidth
            onClick={() => handler.onSubmit()}
            disabled={handler.hasInputError()}
          >
            ログインする
          </LeeapButton>
        </div>
      </form>
      <ErrorAlertDialog
        viewData={presenter.errorAlertDialogViewData()}
        callback={handler.errorAlertDialogCallback()}
      />
      <ProgressDialog viewData={presenter.progressDialogViewData()} />
    </React.Fragment>
  );
};

export default withStyles(styles)(SessionSignInForm);
