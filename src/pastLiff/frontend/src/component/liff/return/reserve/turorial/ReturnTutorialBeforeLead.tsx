import React from "react";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import { ReturnTutorialBeforeLeadViewData } from "./viewData/ReturnTutorialBeforeLeadViewData";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    tutorialLists: {
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      width: "100%",
      marginBottom: "36px"
    },
    tutorialListIcon: {
      width: "24px",
      height: "24px",
      flex: "0 0 24px",
      marginRight: "8px"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnTutorialBeforeLeadProps { 
  viewData: ReturnTutorialBeforeLeadViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnTutorialBeforeLead = (
  props: ReturnTutorialBeforeLeadProps & WithStyles<typeof styles>
) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <div className={props.classes.tutorialLists}>
    <CheckIcon color="primary" className={props.classes.tutorialListIcon} />
    <Typography variant="body1">{props.viewData.tutorialBeforeLead}</Typography>
  </div>
);
export default withStyles(styles)(ReturnTutorialBeforeLead);
