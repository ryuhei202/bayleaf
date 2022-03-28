import * as React from "react";
import { ErrorAlertDialogViewData } from "./viewData/ErrorAlertDialogViewData";
import { ErrorAlertDialogCallback } from "./callback/ErrorAlertDialogCallback";
import { useErrorAlertDialogHandler } from "./handler/UseErrorAlertDialogHandler";
import { useErrorAlertDialogPresenter } from "./presenter/UseErrorAlertDialogPresenter";
import AlertDialog from "../base/AlertDialog";
import ErrorAlertDialogButton from "./ErrorAlertDialogButton";

// ----------------------------------------
// props
// ----------------------------------------
interface ErrorAlertDialogProps {
  viewData: ErrorAlertDialogViewData;
  callback: ErrorAlertDialogCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
/**
 * エラーダイアログ
 */
const ErrorAlertDialog = (props: ErrorAlertDialogProps) => {
  const handler = useErrorAlertDialogHandler(
    props.viewData.errorResponse,
    props.callback
  );
  const presenter = useErrorAlertDialogPresenter(
    handler.open(),
    props.viewData
  );

  return (
    <React.Fragment>
      <AlertDialog
        viewData={presenter.alertDialogViewData()}
        callback={handler.alertDialogCallback()}
      >
        <ErrorAlertDialogButton
          viewData={presenter.errorAlertDialogButtonViewData()}
          callback={handler.errorAlertDialogButtonCallback()}
        />
      </AlertDialog>
    </React.Fragment>
  );
};

export default ErrorAlertDialog;
