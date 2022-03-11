import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import brandImage from "../../../../../assets/images/liff/shared/leeap_logo.svg";
import PasswordResetForm from "./PasswordResetForm";
import Theme from "../../../../model/shared/Theme";
import { usePasswordResetHandler } from "./handler/UsePasswordResetHandler";
import { usePasswordResetPresenter } from "./presenter/UsePasswordResetPresenter";

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
const PasswordReset = (props: WithStyles<typeof styles>) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = usePasswordResetHandler();
  const presenter = usePasswordResetPresenter();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.container}>
      <div className={props.classes.brandImageWrapper}>
        <img className={props.classes.brandImage} src={brandImage} alt="logo" />
      </div>
      <div className={props.classes.explain}>
        下記にメールアドレスを入力し「送信する」ボタンを押すと、パスワード再設定のためのメールが届きます。
        そちらからパスワードを再設定してください。
      </div>
      <PasswordResetForm
        viewData={presenter.passwordResetFormViewData()}
        callback={handler.passwordResetFromCallback()}
      />
    </div>
  );
};

export default withStyles(styles)(PasswordReset);
