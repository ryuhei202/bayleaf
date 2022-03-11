import * as React from "react";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, withStyles, WithStyles } from "@material-ui/core/styles";
import { ProgressDialogViewData } from "./viewData/ProgressDialogViewData";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      overflow: "hidden"
    },
    progress: {
      margin: "30px"
    }
  });
};

// ----------------------------------------
// props
// ----------------------------------------
interface ProgressDialogProps {
  viewData: ProgressDialogViewData;
}

// ----------------------------------------
// Component
// ----------------------------------------
const ProgressDialog = (
  props: ProgressDialogProps & WithStyles<typeof styles>
) => (
  <React.Fragment>
    <Dialog open={props.viewData.open}>
      <div className={props.classes.root}>
        <CircularProgress className={props.classes.progress} />
      </div>
    </Dialog>
  </React.Fragment>
);

export default withStyles(styles)(ProgressDialog);
