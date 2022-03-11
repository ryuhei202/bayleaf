import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Mask from "../../../shared/atoms/Mask";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { CoordeItemViewData } from "./viewData/CoordeItemViewData";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    itemCardInner: {
      width: "100%",
      textAlign: "center",
      cursor: "pointer"
    },
    itemCardImage: {
      width: "100%",
      paddingTop: "100%"
    }
  });

interface CoordeItemProps {
  viewData: CoordeItemViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const CoordeItem = (props: CoordeItemProps & WithStyles<typeof styles>) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <Card className={props.classes.itemCardInner}>
    {props.viewData.isPurchased && <Mask text={props.viewData.maskTitle()} />}
    <CardMedia
      className={props.classes.itemCardImage}
      image={props.viewData.itemPath}
      title={props.viewData.itemName}
    />
  </Card>
);

export default withStyles(styles)(CoordeItem);
