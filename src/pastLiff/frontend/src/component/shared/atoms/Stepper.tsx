import React from "react";
import { createStyles, WithStyles, withStyles, Theme } from "@material-ui/core";

// ----------------------------------------
// style
// ----------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    tutorialStepLabel: {
      backgroundColor: theme.palette.primary.main,
      color: "#ffffff",
      width: "40px",
      height: "40px",
      fontWeight: "bold",
      lineHeight: "40px",
      borderRadius: "50%",
      textAlign: "center"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface StepperProps {
  stepId: number;
}

// ----------------------------------------
// component
// ----------------------------------------
const Stepper = (props: StepperProps & WithStyles<typeof styles>) => {
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return <div className={props.classes.tutorialStepLabel}>{props.stepId}</div>;
};

export default withStyles(styles)(Stepper);
