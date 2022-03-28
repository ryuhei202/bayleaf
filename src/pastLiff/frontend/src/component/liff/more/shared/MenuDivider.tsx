import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    divider: {
      margin: "16px 0",
      width: "100%"
    }
  });

// ----------------------------------------
// component
// ----------------------------------------
const MenuDivider = (props: WithStyles<typeof styles>) => {
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return <Divider className={props.classes.divider} />;
};

export default withStyles(styles)(MenuDivider);
