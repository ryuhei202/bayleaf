import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { ReturnTutorialEndLinkViewData } from "./viewData/ReturnTutorialEndLinkViewData";
import { ReturnTutorialEndLinkCallback } from "./callback/ReturnTutorialEndLinkCallback";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    link: {
      position: "fixed",
      bottom: "36px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100%"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnTutorialEndLinkProps {
  viewData: ReturnTutorialEndLinkViewData;
  callback: ReturnTutorialEndLinkCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnTutorialEndLink = (
  props: ReturnTutorialEndLinkProps & WithStyles<typeof styles>
) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <Link
    underline="always"
    style={{
      visibility: props.viewData.endStep ? "visible" : "hidden"
    }}
    className={props.classes.link}
  >
    <Typography
      variant="body1"
      color="primary"
      align="center"
      onClick={() => props.callback.onClickEndLink()}
    >
      {props.viewData.endMessage}
    </Typography>
  </Link>
);

export default withStyles(styles)(ReturnTutorialEndLink);
