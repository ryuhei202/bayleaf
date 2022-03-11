import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    offIcon: {
      color: "#D8D8D8",
      fontSize: "20px",
      cursor: "pointer"
    }
  });

// ----------------------------------------
// component
// ----------------------------------------
const CloseIcon = (props: SvgIconProps & WithStyles<typeof styles>) => {
  const { classes, className, ..._props } = props;

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <HighlightOffIcon
      {..._props}
      className={classes.offIcon + " " + className}
    />
  );
};

export default withStyles(styles)(CloseIcon);
