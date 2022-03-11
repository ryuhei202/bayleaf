import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import { AddressConfirmFormErrorViewData } from "./viewData/AddressConfirmFormErrorViewData";
import ErrorIcon from "@material-ui/icons/Error";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    root: {
      fontSize: "12px",
      marginTop: ".5rem",
      width: "100%",
    },
    error: {
      color: "#D94848",
      fontWeight: "bold",
    },
    icon: {
      fontSize: "12px",
      marginRight: "2px",
      verticalAlign: "text-bottom",
      fontWeight: "bold",
    },
  });

// ----------------------------------------
// props
// ----------------------------------------
interface AddressConfirmFormErrorProps {
  viewData: AddressConfirmFormErrorViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressConfirmFormError = (
  props: AddressConfirmFormErrorProps & WithStyles<typeof styles>
) => {
  const errors = props.viewData.errors;

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.root}>
      {errors
        ? errors.map((error, index) => {
            return (
              <div className={props.classes.error} key={index}>
                <ErrorIcon className={props.classes.icon} />
                {error}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default withStyles(styles)(AddressConfirmFormError);
