import React from "react";
import { useState } from "react";
import {
  WithStyles,
  createStyles,
  Grid,
  withStyles,
  Divider,
} from "@material-ui/core";
import { AddressConfirmViewData } from "./viewData/AddressConfirmViewData";
import LeeapButton from "../../../shared/LeeapButton";
import InitializingLoader from "../../../shared/transitions/loader/InitializingLoader";
import AddressConfirmForm from "./AddressConfirmForm";
import { AddressConfirmCallback } from "./callback/AddressConfirmCallback";
import { useAddressConfirmPresenter } from "./presenter/UseAddressConfirmPresenter";
import AddressConfirmPopup from "./AddressConfirmPopup";
import { useAddressConfirmHandler } from "./handler/UseAddressConfirmHandler";
import AddressConfirmFormError from "./AddressConfirmFormError";
import { useNavigate } from "react-router-dom";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    root: {
      fontSize: "12px",
      padding: "0 .5em",
    },
    section: {
      marginBottom: "1em",
    },
    label: {
      fontSize: "12px",
      color: "#6e6e6e",
    },
    value: {
      fontSize: "12px",
      width: "100%",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      marginBottom: ".5em",
    },
    valueNone: {
      display: "none",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
    },
    button: {
      height: "32px",
      float: "right",
    },
    divider: {
      width: "100%",
      marginTop: "1em",
    },
    explain: {
      marginTop: ".25rem",
      padding: ".5em",
    },
  });

// ----------------------------------------
// Props
// ----------------------------------------
interface AddressConfirmProps {
  viewData: AddressConfirmViewData;
  callback: AddressConfirmCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressConfirm = (
  props: AddressConfirmProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const [_open, setOpen] = useState<boolean>(false);

  // ----------------------------------------
  // Callbacks
  // ----------------------------------------
  const openPopup = () => {
    setOpen(true);
  };
  const closePopup = () => {
    setOpen(false);
  };

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const navigate = useNavigate();
  const presenter = useAddressConfirmPresenter(props.viewData, _open);
  //const memberData = presenter.memberStaticData;
  const handler = useAddressConfirmHandler(
    props.callback,
    openPopup,
    closePopup
  );

  return !props.viewData.loaded ? (
    <InitializingLoader />
  ) : (
    <div className={props.classes.root}>
      <Grid container className={props.classes.section}>
        <Grid item xs={3} className={props.classes.label}>
          会員住所
        </Grid>
        <Grid item xs={9}>
          <div className={props.classes.value}>{props.viewData.member.zip}</div>
          <div className={props.classes.value}>
            {props.viewData.member.city}
          </div>
          {props.viewData.member.ward.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.member.ward}
            </div>
          ) : null}
          {props.viewData.member.building.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.member.building}
            </div>
          ) : null}
          {props.viewData.member.department.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.member.department}
            </div>
          ) : null}
          <div className={props.classes.value}>{props.viewData.member.tel}</div>

          <div className={props.classes.buttonWrapper}>
            <LeeapButton
              colors="border"
              size="small"
              style={{ boxShadow: "none", height: "32px" }}
              onClick={() => {
                navigate("/address/member");
              }}
            >
              変更
            </LeeapButton>
          </div>

          <AddressConfirmFormError viewData={presenter.memberFormErrors()} />
        </Grid>
        <Divider className={props.classes.divider} />
      </Grid>
      <Grid container className={props.classes.section}>
        <Grid item xs={3} className={props.classes.label}>
          送付先住所
        </Grid>
        <Grid item xs={9}>
          <div className={props.classes.value}>{props.viewData.dest.zip}</div>
          <div className={props.classes.value}>{props.viewData.dest.city}</div>
          {props.viewData.dest.ward.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.dest.ward}
            </div>
          ) : null}
          {props.viewData.dest.building.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.dest.building}
            </div>
          ) : null}
          {props.viewData.dest.department.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.dest.department}
            </div>
          ) : null}
          {props.viewData.dest.name ? (
            <div className={props.classes.value}>
              {props.viewData.dest.name}
            </div>
          ) : null}
          {props.viewData.dest.nameKana ? (
            <div className={props.classes.value}>
              {props.viewData.dest.nameKana}
            </div>
          ) : null}

          <div className={props.classes.buttonWrapper}>
            <LeeapButton
              colors="border"
              size="small"
              style={{ boxShadow: "none", height: "32px" }}
              onClick={() => {
                navigate("/address/destination");
              }}
            >
              変更
            </LeeapButton>
          </div>

          <AddressConfirmFormError viewData={presenter.destFormErrors()} />
        </Grid>
        <Divider className={props.classes.divider} />
      </Grid>
      <Grid container className={props.classes.section}>
        <AddressConfirmForm
          viewData={presenter.formViewData()}
          callback={handler.formCallback()}
        />
      </Grid>
      <footer className={props.classes.explain}> </footer>
      <AddressConfirmPopup
        viewData={presenter.popupViewData()}
        callback={handler.popupCallback()}
      />
    </div>
  );
};

export default withStyles(styles)(AddressConfirm);
