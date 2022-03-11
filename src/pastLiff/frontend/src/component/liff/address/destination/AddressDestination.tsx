import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import AddressDestinationForm from "./AddressDestinationForm";
import Theme from "../../../../model/shared/Theme";
import { useAddressDestinationHandler } from "./handler/UseAddressDestinationHandler";
import InitializingLoader from "../../../shared/transitions/loader/InitializingLoader";
import { useAddressDestinationPresenter } from "./presenter/UseAddressDestinationPresenter";
import { AddressDestinationFormViewData } from "./viewData/AddressDestinationFormViewData";
import { AddressDestinationCallback } from "./callback/AddressDestinationCallback";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    container: {
      background: Theme.palette.background.default,
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      bottom: 0
    },
    brandImageWrapper: {
      margin: "1rem 0",
      textAlign: "center"
    },
    brandImage: {
      width: "100px",
      height: "auto"
    },
    explain: {
      padding: "1rem",
      fontSize: "12px"
    }
  });

interface AddressDestinationProps {
  viewData: AddressDestinationFormViewData;
  callback: AddressDestinationCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressDestination = (
  props: AddressDestinationProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const presenter = useAddressDestinationPresenter(props.viewData);
  const handler = useAddressDestinationHandler(props.callback);

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.container}>
      {props.viewData.formData.loaded && props.viewData.prefs ? (
        <AddressDestinationForm
          viewData={presenter.addressDestinationFormViewData()}
          callback={handler.addressDestinationFormCallback()}
        />
      ) : (
        <InitializingLoader />
      )}
    </div>
  );
};

export default withStyles(styles)(AddressDestination);
