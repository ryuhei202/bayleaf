import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import { AddressConfirmFormCallback } from "./callback/AddressConfirmFormCallback";
import SelectInput from "../../../shared/inputs/select/SelectInput";
import { useAddressConfirmFormPresenter } from "./presenter/UseAddressConfirmFormPresenter";
import { AddressConfirmFormViewData } from "./viewData/AddressConfirmFormViewData";
import { useAddressConfirmFormHandler } from "./handler/UseAddressConfirmFormHandler";
import LeeapButton from "../../../shared/LeeapButton";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    form: {
      paddingTop: "1rem",
      fontSize: "12px",
      width: "100%"
    },
    textField: {
      marginBottom: "1rem"
    },
    linkWrapper: {
      textAlign: "right",
      fontSize: "12px"
    },
    link: {
      color: "#6e6e6e"
    },
    itemCardSearchIcon: {
      position: "absolute",
      zIndex: 2,
      top: "4px",
      left: "4px"
    },
    alert: {
      color: "#D94848"
    },
    explain: {
      marginBottom: "1rem"
    },
    actions: {
      padding: ".25rem 0"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface AddressConfirmFormProps {
  viewData: AddressConfirmFormViewData;
  callback: AddressConfirmFormCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressConfirmForm = (
  props: AddressConfirmFormProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useAddressConfirmFormHandler(
    props.viewData.formData,
    props.callback
  );
  const presenter = useAddressConfirmFormPresenter(
    props.viewData.formData,
    props.viewData.timeChoices
  );
  const timeSelectInputViewData = presenter.timeSelectInputViewData();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <form className={props.classes.form}>
      <div className={props.classes.textField}>
        {
          timeSelectInputViewData.defaultValue && timeSelectInputViewData.listData ? (
              // defaultValueがnullの場合に、再レンダリングさせてもその値が反映されないため、
              // 強制的に再レンダリングさせる
              <SelectInput
                  viewData={timeSelectInputViewData}
                  callback={handler.timeInputCallback}
              />
          ) : null
        }
      </div>

      <div className={props.classes.actions}>
        <LeeapButton
            colors="primary"
            size="large"
            fullWidth
            onClick={() => props.callback.onPopupOpen()}
        >
          登録する
        </LeeapButton>
      </div>
    </form>
  );
};

export default withStyles(styles)(AddressConfirmForm);
