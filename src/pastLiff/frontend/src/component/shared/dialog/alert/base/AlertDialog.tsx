import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { AlertDialogViewData } from "./viewData/AlertDialogViewData";
import { AlertDialogCallback } from "./callback/AlertDialogCallback";

// ----------------------------------------
// props
// ----------------------------------------
interface AlertDialogProps {
  viewData: AlertDialogViewData;
  callback: AlertDialogCallback;
  children: React.ReactNode;
}

// ----------------------------------------
// component
// ----------------------------------------
/**
 * アラートダイアログ
 */
const AlertDialog = (props: AlertDialogProps) => (
  <React.Fragment>
    <div>
      <Dialog
        open={props.viewData.open}
        onExited={() => props.callback.onExited()}
      >
        <DialogTitle>{props.viewData.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.viewData.message}</DialogContentText>
        </DialogContent>
        <DialogActions>{props.children}</DialogActions>
      </Dialog>
    </div>
  </React.Fragment>
);

export default AlertDialog;
