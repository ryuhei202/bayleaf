import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    mask: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 2,
      backgroundColor: "rgba(0, 0, 0, .6)"
    },

    maskText: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "100%",
      color: "#ffffff",
      transform: "translate(-50%, -50%)"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface MaskProps {
  text: string;
}

// ----------------------------------------
// component
// ----------------------------------------
const Mask = (props: MaskProps & WithStyles<typeof styles>) => {
  const { classes, text } = props;

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={classes.mask}>
      <Typography variant="h1" className={classes.maskText}>
        {text}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Mask);
