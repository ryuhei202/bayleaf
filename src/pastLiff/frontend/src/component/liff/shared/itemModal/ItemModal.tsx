import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "../../../shared/atoms/CloseIcon";
import { ItemModalViewData } from "./viewData/ItemModalViewData";
import { ItemModalCallback } from "./callback/ItemModalCallback";

// ----------------------------------------
// style
// ----------------------------------------
const styles = createStyles({
  modal: {
    padding: "0 16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  closeIconWrapper: {
    position: "absolute",
    top: "10px",
    right: "10px"
  },
  modalImageWrapper: {
    marginTop: "40px"
  },
  modalImage: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    backgroundColor: "#ddd"
  },
  modalBodyWrapper: {
    margin: "20px 0",
    textAlign: "center"
  }
});

// ----------------------------------------
// props
// ----------------------------------------
interface ItemModalProps {
  viewData: ItemModalViewData;
  callback: ItemModalCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const ItemModal = (props: ItemModalProps & WithStyles<typeof styles>) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <Modal
    className={props.classes.modal}
    open={props.viewData.isShow}
    onClose={() => props.callback.closeModal()}
  >
    <Fade in={props.viewData.isShow}>
      <Card>
        <div className={props.classes.closeIconWrapper}>
          <CloseIcon onClick={() => props.callback.closeModal()} />
        </div>
        <div className={props.classes.modalImageWrapper}>
          <img
            className={props.classes.modalImage}
            src={props.viewData.itemPath}
            alt={props.viewData.itemName}
          />
        </div>
        <div className={props.classes.modalBodyWrapper}>
          <Typography variant="body1">{props.viewData.itemName}</Typography>
          <Typography variant="body1">{props.viewData.itemColor}</Typography>
        </div>
      </Card>
    </Fade>
  </Modal>
);

export default withStyles(styles)(ItemModal);
