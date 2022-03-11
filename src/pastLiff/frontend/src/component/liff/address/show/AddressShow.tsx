import React from "react";
import {
  WithStyles,
  createStyles,
  Grid,
  withStyles,
  Divider,
} from "@material-ui/core";
import { AddressShowViewData } from "./viewData/AddressShowViewData";
import LeeapButton from "../../../shared/LeeapButton";
import InitializingLoader from "../../../shared/transitions/loader/InitializingLoader";
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
interface AddressShowProps {
  viewData: AddressShowViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressShow = (props: AddressShowProps & WithStyles<typeof styles>) => {
  const navigate = useNavigate();

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
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}
          {props.viewData.member.building.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.member.building}
            </div>
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}
          {props.viewData.member.department.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.member.department}
            </div>
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}
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
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}
          {props.viewData.dest.building.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.dest.building}
            </div>
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}
          {props.viewData.dest.department.trim() ? (
            <div className={props.classes.value}>
              {props.viewData.dest.department}
            </div>
          ) : (
            <div className={props.classes.valueNone}>&nbsp;</div>
          )}

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
        </Grid>
        <Divider className={props.classes.divider} />
      </Grid>
      <Grid container className={props.classes.section}>
        <Grid item xs={3} className={props.classes.label}>
          配送希望時間
        </Grid>
        <Grid item xs={9}>
          <div className={props.classes.value}>{props.viewData.timeText}</div>

          <div className={props.classes.buttonWrapper}>
            <LeeapButton
              colors="border"
              size="small"
              onClick={() => {
                navigate("/address/confirm");
              }}
              style={{ boxShadow: "none", height: "32px" }}
            >
              変更
            </LeeapButton>
          </div>
        </Grid>
        <Divider className={props.classes.divider} />
      </Grid>

      <footer className={props.classes.explain}> </footer>
    </div>
  );
};

export default withStyles(styles)(AddressShow);
