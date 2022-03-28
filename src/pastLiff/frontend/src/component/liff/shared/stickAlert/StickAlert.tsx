import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import Backdrop from "@material-ui/core/Backdrop";
import { StickAlertViewData } from "./viewData/StickAlertViewData";
import { StickAlertCallback } from "./callback/StickAlertCallback";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      position: "absolute",
      width: "100%",
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: 4,
      padding: "10px",
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 3px rgba(0, 0, 0, .2)"
    }
  });
};

// ----------------------------------------
// props
// ----------------------------------------
interface StickAlertProps {
  viewData: StickAlertViewData;
  callback: StickAlertCallback;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// ----------------------------------------
// component
// ----------------------------------------
const StickAlert = (props: StickAlertProps & WithStyles<typeof styles>) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <Modal
    open={props.viewData.open}
    BackdropComponent={Backdrop}
    onBackdropClick={() => props.callback.onCancel()}
  >
    <Slide direction="up" in={props.viewData.open} style={props.style}>
      <div className={props.classes.root}>{props.children}</div>
    </Slide>
  </Modal>
);

export default withStyles(styles)(StickAlert);
