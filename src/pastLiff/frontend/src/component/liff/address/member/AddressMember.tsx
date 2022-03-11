import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import AddressMemberForm from "./AddressMemberForm";
import Theme from "../../../../model/shared/Theme";
import { useAddressMemberHandler } from "./handler/UseAddressMemberHandler";
import { useAddressMemberPresenter } from "./presenter/UseAddressMemberPresenter";
import { AddressMemberCallback } from "./callback/AddressMemberCallback";
import {AddressMemberFormViewData} from "./viewData/AddressMemberFormViewData";
import InitializingLoader from "../../../shared/transitions/loader/InitializingLoader";

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

interface AddressMemberProps {
  viewData: AddressMemberFormViewData;
  callback: AddressMemberCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressMember = (
  props: AddressMemberProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useAddressMemberHandler(props.callback);
  const presenter = useAddressMemberPresenter(props.viewData);

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.container}>
      <div className={props.classes.container}>
        {props.viewData.formData.loaded && props.viewData.prefs ? (
            <AddressMemberForm
                viewData={presenter.addressMemberFormViewData()}
                callback={handler.addressMemberFormCallback()}
            />
        ) : (
            <InitializingLoader />
        )}
      </div>
    </div>
    //<ProgressDialog viewData={presenter.progressDialogViewData()} />
  );
};

export default withStyles(styles)(AddressMember);
