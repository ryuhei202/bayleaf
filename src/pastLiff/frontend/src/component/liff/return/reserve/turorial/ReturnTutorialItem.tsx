import React from "react";
import { createStyles, WithStyles, withStyles, Theme } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Stepper from "../../../../shared/atoms/Stepper";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { ReturnTutorialItemViewData } from "./viewData/ReturnTutorialItemViewData";

// ----------------------------------------
// style
// ----------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    tutorialHeader: {
      marginBottom: "36px"
    },
    tutorialHeaderText: {
      color: theme.palette.primary.light,
      padding: "8px 16px",
      lineHeight: "20px"
    },
    tutorialCardInner: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      minHeight: "280px",
      margin: "24px 0",
      padding: "36px 8px"
    },
    tutorialCardImage: {
      width: "50px",
      height: "50px",
      margin: "8px 0"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnTutorialItemProps {
  viewData: ReturnTutorialItemViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnTutorialItem = (
  props: ReturnTutorialItemProps & WithStyles<typeof styles>
) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  <>
    <Typography
      color="primary"
      variant="h1"
      align="center"
      className={props.classes.tutorialHeader}
    >
      返却の流れをみる
    </Typography>
    <Card
      key={props.viewData.stepId}
      className={props.classes.tutorialCardInner}
    >
      <Stepper stepId={props.viewData.stepId} />
      <Typography
        className={props.classes.tutorialHeaderText}
        variant="h1"
        align="center"
      >
        {props.viewData.stepHeader}
      </Typography>
      <CardMedia
        className={props.classes.tutorialCardImage}
        image={props.viewData.stepImagePath}
      />
      <Typography variant="body1" align="center">
        {props.viewData.stepBody}
      </Typography>
    </Card>
  </>
);

export default withStyles(styles)(ReturnTutorialItem);
