import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LeeapButton from "../../../shared/LeeapButton";
import Typography from "@material-ui/core/Typography";
import { ConfirmViewData } from "./viewData/ConfirmViewData";
import { ConfirmCallback } from "./callback/ConfirmCallback";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    panelBodyButtonWrapper: {
      textAlign: "right",
      marginTop: "56px",
      "& > :first-child": {
        marginRight: "6px"
      }
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ConfirmProps {
  viewData: ConfirmViewData;
  callback: ConfirmCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const Confirm = (props: ConfirmProps & WithStyles<typeof styles>) => {
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <>
      <Typography variant="body1">
        {props.viewData.confirmReserveHeaderText}
      </Typography>
      <Typography variant="body2">
        {props.viewData.confirmReserveLeadText}
      </Typography>

      <div className={props.classes.panelBodyButtonWrapper}>
        <LeeapButton
          onClick={() => props.callback.onCancel()}
          colors="cancel"
          size="medium"
        >
          {props.viewData.confirmReservebuttonFirstText}
        </LeeapButton>
        <LeeapButton
          onClick={() => props.callback.onComplete()}
          colors="primary"
          size="medium"
        >
          {props.viewData.confirmReservebuttonSecondText}
        </LeeapButton>
      </div>
    </>
  );
};

export default withStyles(styles)(Confirm);
