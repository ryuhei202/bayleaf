import * as React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";

import { CheckboxInputViewData } from "./viewData/CheckboxInputViewData";
import { CheckboxInputCallback } from "./callback/CheckboxInputCallback";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {}
  });
};

// ----------------------------------------
// props
// ----------------------------------------
export interface CheckboxInputProps {
  viewData: CheckboxInputViewData;
  callback: CheckboxInputCallback;
}

// ----------------------------------------
// Component
// ----------------------------------------
const CheckboxInput = (
  props: CheckboxInputProps & WithStyles<typeof styles>
) => {
  return (
    <React.Fragment>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={props.viewData.defaultChecked}
            color={"primary"}
            onChange={props.callback.onChange}
          />
        }
        label={props.viewData.label}
      />
    </React.Fragment>
  );
};

export default withStyles(styles)(CheckboxInput);
