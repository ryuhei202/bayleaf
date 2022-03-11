import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LeeapButton from "../../../shared/LeeapButton";
import ZoomableCoordeItem from "../../shared/coordeItem/ZoomableCoordeItem";
import ReturnTutorial from "./turorial/ReturnTutorial";
import StickAlert from "../../shared/stickAlert/StickAlert";
import Confirm from "../../shared/confirm/Confirm";
import { useReturnReservePresenter } from "./presenter/UseReturnReservePresenter";
import { ReturnReserveViewData } from "./viewData/ReturnReserveViewData";
import { useReturnReserveTutorialHandler } from "./handler/UseReturnReserveTutorialHandler";
import { useReturnReserveConfirmHandler } from "./handler/UseReturnReserveConfirmHandler";
import { useStickAlertHandler } from "../../shared/stickAlert/handler/UseStickAlertHandler";
import { CoordeItem } from "../../../../model/liff/coorde/data/CoordeItem";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    imgIcon: {
      width: "100%",
      height: "100%"
    },
    itemCardSearchIcon: {
      position: "absolute",
      zIndex: 2,
      top: "4px",
      left: "4px"
    },
    logoWrapper: {
      width: "80%",
      margin: "0 auto"
    },
    bodyWrapper: {
      margin: "16px 0"
    },
    headerWrapper: {
      marginTop: "32px"
    },
    itemCardWrapper: {
      marginTop: "24px"
    },
    buttonWrapper: {
      marginTop: "32px"
    }
  });

// ----------------------------------------
// props
// ----------------------------------------
interface ReturnReserveProps {
  viewData: ReturnReserveViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const ReturnReserve = (
  props: ReturnReserveProps & WithStyles<typeof styles>
) => {
  /**
   * @todo そのうちAPIレスポンスと差し替える
   * 返却するコーデアイテムの配列
   */
  const coordeItems: CoordeItem[] = [
    {
      itemId: 1,
      itemName: "990 LUCIANO-c カーディガン",
      itemColor: "バーガンディ",
      itemPath: "https://source.unsplash.com/weekly?water",
      isPurchased: false
    },
    {
      itemId: 2,
      itemName: "990 LUCIANO-c カーディガン",
      itemColor: "ストライプブルー",
      itemPath: "https://source.unsplash.com/weekly?sun",
      isPurchased: true
    },
    {
      itemId: 3,
      itemName: "990 LUCIANO-c カーディガン",
      itemColor: "ネイビー",
      itemPath: "https://source.unsplash.com/weekly?car",
      isPurchased: false
    },
    {
      itemId: 4,
      itemName: "990 LUCIANO-c カーディガン",
      itemColor: "ブラック",
      itemPath: "https://source.unsplash.com/weekly?nature",
      isPurchased: false
    }
  ];

  // ハンドラーを初期化
  const tutorialHandler = useReturnReserveTutorialHandler();
  const stickHandler = useStickAlertHandler();
  const confirmHandler = useReturnReserveConfirmHandler(stickHandler.onCancel);

  // プレゼンターを初期化
  const presenter = useReturnReservePresenter(
    coordeItems,
    props.viewData.returnReserveType,
    tutorialHandler.isTutorialComplete(),
    stickHandler.open()
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <>
      {/** チュートリアル画面 */}
      {!presenter.tutorialComplete() && (
        <ReturnTutorial
          viewData={presenter.tutorialViewData()}
          callback={tutorialHandler.tutorialCompletedCallback()}
        />
      )}

      {/** 返却予約確認画面 */}
      <StickAlert
        viewData={presenter.stickAlertViewData()}
        callback={stickHandler.stickAlertCallback()}
      >
        <Confirm
          viewData={presenter.confirmViewData()}
          callback={confirmHandler.confirmCallback()}
        />
      </StickAlert>

      {/** 返却予約画面 */}
      <div className={props.classes.logoWrapper}>
        <img
          className={props.classes.imgIcon}
          src={props.viewData.logoImagePath}
        />
      </div>

      <div className={props.classes.bodyWrapper}>
        <Typography variant="body1" align="center">
          {props.viewData.messageBeforeHighlight}
          <Typography
            style={{ color: props.viewData.highLightColor }}
            variant="body1"
            display="inline"
          >
            {props.viewData.messageHighlight}
          </Typography>
          {props.viewData.messageAfterHighlight}
        </Typography>
        <div className={props.classes.headerWrapper}>
          <Typography variant="h1" align="center">
            返却するコーデ
          </Typography>
        </div>
      </div>

      <div className={props.classes.itemCardWrapper}>
        <Grid container spacing={1}>
          {presenter.coordeItemsViewDatas().map(coordeItemViewDatas => {
            return (
              <Grid key={coordeItemViewDatas.itemId} item xs={3}>
                <ZoomableCoordeItem viewData={coordeItemViewDatas} />
              </Grid>
            );
          })}
        </Grid>
      </div>

      <div
        onClick={() => stickHandler.onOpen()}
        className={props.classes.buttonWrapper}
      >
        <LeeapButton colors="primary" size="large" fullWidth>
          {props.viewData.reserveButtonTitle}
        </LeeapButton>
      </div>
    </>
  );
};

export default withStyles(styles)(ReturnReserve);
