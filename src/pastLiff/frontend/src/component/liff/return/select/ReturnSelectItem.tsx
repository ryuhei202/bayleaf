import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { ReturnSelectItemViewData } from "./viewData/ReturnSelectItemViewData";
import { ReturnSelectItemCallback } from "./callback/ReturnSelectItemCallback";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    cardInner: {
      padding: "32px 16px",
      textAlign: "center"
    },
    imgIcon: {
      width: "100%",
      height: "100%"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnSelectItemProps {
  viewData: ReturnSelectItemViewData;
  callback: ReturnSelectItemCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnSelectItem = (
  props: ReturnSelectItemProps & WithStyles<typeof styles>
) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <div onClick={() => props.callback.onClick(props.viewData.returnReserveType)}>
    <Card className={props.classes.cardInner}>
      <img
        className={props.classes.imgIcon}
        src={props.viewData.imgSrc}
        alt={props.viewData.imgName}
      />
      <Typography variant="body1" align="center">
        {props.viewData.imgName}
      </Typography>
    </Card>
  </div>
);

export default withStyles(styles)(ReturnSelectItem);
