import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import brandImage from "../../../../../assets/images/liff/shared/leeap_logo.svg";
import Theme from "../../../../model/shared/Theme";

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

// ----------------------------------------
// component
// ----------------------------------------
const PasswordResetRequested = (props: WithStyles<typeof styles>) => {
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.container}>
      <div className={props.classes.brandImageWrapper}>
        <img className={props.classes.brandImage} src={brandImage} alt="logo" />
      </div>
      <div className={props.classes.explain}>
        パスワード再設定のメールを送信しました。
        <br />
        メールにパスワード再設定用のリンクがありますので、そちらよりパスワードの再設定をお願いします。
      </div>
    </div>
  );
};

export default withStyles(styles)(PasswordResetRequested);
