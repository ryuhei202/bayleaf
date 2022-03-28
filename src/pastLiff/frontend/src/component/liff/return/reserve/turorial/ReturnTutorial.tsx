import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Swiper from "../../../shared/swiper/Swiper";
import ReturnTutorialBeforeLead from "./ReturnTutorialBeforeLead";
import ReturnTutorialItem from "./ReturnTutorialItem";
import ReturnTutorialEndLink from "./ReturnTutorialEndLink";
import { ReturnTutorialViewData } from "./viewData/ReturnTutorialViewData";
import { ReturnTutorialCallback } from "./callback/ReturnTutorialCallback";
import { useReturnTutorialPresenter } from "./presenter/UseReturnTutorialPresenter";
import { useReturnTutorialHandler } from "./handler/useReturnTutorialHandler";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    tutorialWrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 4,
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff"
    },
    tutorialHeaderWrapper: {
      textAlign: "center"
    },
    tutorialListsWrapper: {
      marginTop: "36px"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnTutorialProps {
  viewData: ReturnTutorialViewData;
  callback: ReturnTutorialCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnTutorial = (
  props: ReturnTutorialProps & WithStyles<typeof styles>
) => {
  const { classes } = props;
  const handler = useReturnTutorialHandler(props.callback);
  const presenter = useReturnTutorialPresenter(
    props.viewData.tutorials,
    props.viewData.tutorialsBeforeLead,
    props.viewData.returnReserveType,
    handler.currentStep()
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={classes.tutorialWrapper}>
      <Swiper
        viewData={presenter.swiperViewData()}
        callback={handler.swiperCallback()}
      >
        <div>
          <div className={classes.tutorialHeaderWrapper}>
            <CheckCircle color="primary" fontSize="large" />
            <Typography variant="h1">返却の流れをみる</Typography>
          </div>

          {/* チュートリアルStep前の説明 */}
          <div className={classes.tutorialListsWrapper}>
            {presenter
              .tutorialBeforeLeadViewDatas()
              .map((tutorialBeforeLeadViewData, index) => {
                return (
                  <ReturnTutorialBeforeLead
                    key={index}
                    viewData={tutorialBeforeLeadViewData}
                  />
                );
              })}
          </div>
        </div>

        {/* チュートリアルStep */}
        {presenter.tutorialItemViewDatas().map(tutorialItemViewData => {
          return (
            <ReturnTutorialItem
              key={tutorialItemViewData.stepId}
              viewData={tutorialItemViewData}
            />
          );
        })}
      </Swiper>

      {/* チュートリアルが最後のStepの時に表示 */}
      <ReturnTutorialEndLink
        viewData={presenter.tutorialEndLinkViewData()}
        callback={handler.tutorialEndLinkCallback()}
      />
    </div>
  );
};

export default withStyles(styles)(ReturnTutorial);
