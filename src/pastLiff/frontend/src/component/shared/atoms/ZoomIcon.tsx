import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import { SvgIconProps } from "@material-ui/core/SvgIcon";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    zoomIcon: {
      zIndex: 3,
      color: "#D8D8D8"
    }
  });

// ----------------------------------------
// component
// ----------------------------------------
const ZoomIcon = (props: SvgIconProps & WithStyles<typeof styles>) => {
  const { classes, className, ..._props } = props;

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <SearchIcon {..._props} className={classes.zoomIcon + " " + className} />
  );
};

export default withStyles(styles)(ZoomIcon);
