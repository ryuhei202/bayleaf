import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import brandImage from "../../../../../assets/images/liff/shared/leeap_logo.svg";
import SessionSignInForm from "./SessionSignInForm";
import { useSessionSignInPresenter } from "./presenter/UseSessionSignInPresenter";
import { SessionSignInCallback } from "./callback/SessionSignInCallback";
import { useSessionSignInHandler } from "./handler/UseSessionSignInHandler";
import Theme from "../../../../model/shared/Theme";
import PasswordReset from "../../password/reset/PasswordReset";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { liffPath } from "../../LiffPath";
import PasswordResetRequested from "../../password/reset/PasswordResetRequested";

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
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface SessionSignInProps {
  callback: SessionSignInCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const SessionSignIn = (
  props: SessionSignInProps & WithStyles<typeof styles>
) => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useSessionSignInHandler(props.callback);
  const presenter = useSessionSignInPresenter();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <Router>
      <Route
        path={`${liffPath}`}
        render={() => (
          <div className={props.classes.container}>
            <div className={props.classes.brandImageWrapper}>
              <img
                className={props.classes.brandImage}
                src={brandImage}
                alt="logo"
              />
            </div>
            <SessionSignInForm
              viewData={presenter.signInFormViewData()}
              callback={handler.sessionSignInFromCallback()}
            />
          </div>
        )}
      ></Route>
      <Route
        exact
        path="/password/reset"
        render={() => <PasswordReset />}
      ></Route>
      <Route
        exact
        path="/password/reset-requested"
        render={() => <PasswordResetRequested />}
      ></Route>
    </Router>
  );
};

export default withStyles(styles)(SessionSignIn);
