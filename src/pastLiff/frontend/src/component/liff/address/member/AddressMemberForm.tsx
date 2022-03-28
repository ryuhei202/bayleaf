import React from "react";
import TextInput from "../../../shared/inputs/text/TextInput";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import LeeapButton from "../../../shared/LeeapButton";
import { AddressMemberFormViewData } from "./viewData/AddressMemberFormViewData";
import { AddressMemberFormCallback } from "./callback/AddressMemberFormCallback";
import { useAddressMemberFormHandler } from "./handler/UseAddressMemberFormHandler";
import { useAddressMemberFormPresenter } from "./presenter/UseAddressMemberFormPresenter";
import SelectInput from "../../../shared/inputs/select/SelectInput";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    form: {
      padding: "1rem",
      fontSize: "12px"
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
interface AddressMemberFormProps {
  viewData: AddressMemberFormViewData;
  callback: AddressMemberFormCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressMemberForm = (
  props: AddressMemberFormProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useAddressMemberFormHandler(
    props.viewData.formData,
    props.callback
  );
  const presenter = useAddressMemberFormPresenter(
    props.viewData.formData,
    props.viewData.prefs,
    props.viewData.errorResponse,
    handler.zipError(),
    handler.zipHelperText(),
    handler.addr1Error(),
    handler.addr1HelperText(),
    handler.addr2Error(),
    handler.addr2HelperText(),
    handler.addr3Error(),
    handler.addr3HelperText(),
    handler.company1Error(),
    handler.company1HelperText(),
    handler.company2Error(),
    handler.company2HelperText(),
    handler.telError(),
    handler.telHelperText(),
    handler.yamatoCenterCodeError(),
    handler.yamatoCenterCodeHelperText(),
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <React.Fragment>
      <form className={props.classes.form}>
        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.zipTextInputViewData()}
            callback={handler.zipInputCallback}
            validator={handler.zipInputValidator()}
          />
        </div>

        <div className={props.classes.textField}>
          <SelectInput
            viewData={presenter.prefSelectInputViewData()}
            callback={handler.prefInputCallback}
          />
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.addr1TextInputViewData()}
            callback={handler.addr1InputCallback}
            validator={handler.addr1InputValidator()}
          />
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.addr2TextInputViewData()}
            callback={handler.addr2InputCallback}
            validator={handler.addr2InputValidator()}
          />
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.addr3TextInputViewData()}
            callback={handler.addr3InputCallback}
            validator={handler.addr3InputValidator()}
          />
        </div>

        <div className={props.classes.explain}>
          マンション名、号室
          (マンション名が入らなかった人はその他①と②に続けてお書き下さい)
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.company1TextInputViewData()}
            callback={handler.company1InputCallback}
            validator={handler.company1InputValidator()}
          />
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.company2TextInputViewData()}
            callback={handler.company2InputCallback}
            validator={handler.company2InputValidator()}
          />
        </div>

        <div className={props.classes.textField}>
          <TextInput
            viewData={presenter.telTextInputViewData()}
            callback={handler.telInputCallback}
            validator={handler.telInputValidator()}
          />
          <span className={props.classes.alert}>
            ※お電話番号は基本的に運送会社の商品配送伝票に使用させていただきます。
          </span>
        </div>

        <div className={props.classes.actions}>
          <LeeapButton
            colors="primary"
            size="large"
            fullWidth
            onClick={() => handler.onSubmit()}
          >
            確認する
          </LeeapButton>
        </div>
      </form>
    </React.Fragment>
  );
};

export default withStyles(styles)(AddressMemberForm);
