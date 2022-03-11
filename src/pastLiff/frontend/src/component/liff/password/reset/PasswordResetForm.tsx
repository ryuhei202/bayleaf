import React from "react";
import TextInput from "../../../shared/inputs/text/TextInput";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LeeapButton from "../../../shared/LeeapButton";
import { usePasswordResetFormHandler } from "./handler/UsePasswordResetFormHandler";
import ErrorAlertDialog from "../../../shared/dialog/alert/error/ErrorAlertDialog";
import ProgressDialog from "../../../shared/dialog/progress/ProgressDialog";
import { PasswordResetFormCallback } from "./callback/PasswordResetFormCallback";
import { PasswordResetFormViewData } from "./viewData/PasswordResetFormViewData";
import {usePasswordResetFormPresenter} from "./presenter/UsePasswordResetFormPresenter";

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
interface PasswordResetFormProps {
  viewData: PasswordResetFormViewData;
  callback: PasswordResetFormCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const PasswordResetForm = (
    props: PasswordResetFormProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = usePasswordResetFormHandler(
      props.viewData.defaultFormData,
      props.callback
  );
  const presenter = usePasswordResetFormPresenter(
      props.viewData.defaultFormData,
      handler.emailError(),
      handler.emailHelperText(),
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

          <div className={props.classes.actions}>
            <LeeapButton
                colors="primary"
                size="large"
                fullWidth
                onClick={() => handler.onSubmit()}
                disabled={handler.emailError()}
            >
              送信する
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

export default withStyles(styles)(PasswordResetForm);
