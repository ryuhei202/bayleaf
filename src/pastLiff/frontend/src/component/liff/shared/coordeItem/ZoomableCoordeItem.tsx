import React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import CoordeItem from "./CoordeItem";
import ZoomIcon from "../../../shared/atoms/ZoomIcon";
import ItemModal from "../itemModal/ItemModal";
import { ZoomableCoordeItemViewData } from "./viewData/ZoomableCoordeItemViewData";
import { useZoomableCoordeItemPresenter } from "./UseZoomableCoordeItemPresenter";
import { useZoomableCoordeItemHandler } from "./UseZoomableCoordeItemHandler";

// ----------------------------------------
// style
// ----------------------------------------
const styles = () =>
  createStyles({
    root: {
      position: "relative"
    },
    itemZoomIcon: {
      position: "absolute",
      top: "3px",
      left: "3px"
    },
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

// ----------------------------------------
// props
// ----------------------------------------
interface ZoomableCoordeItemProps {
  viewData: ZoomableCoordeItemViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const ZoomableCoordeItem = (
  props: ZoomableCoordeItemProps & WithStyles<typeof styles>
) => {
  const handler = useZoomableCoordeItemHandler();
  const presenter = useZoomableCoordeItemPresenter(
    props.viewData,
    handler.isShow()
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <>
      <ItemModal
        viewData={presenter.itemModalViewData()}
        callback={handler.itemModalCallback()}
      />
      <div className={props.classes.root} onClick={() => handler.onClickItem()}>
        <ZoomIcon className={props.classes.itemZoomIcon} />
        <CoordeItem viewData={presenter.coordeItemViewData()} />
      </div>
    </>
  );
};

export default withStyles(styles)(ZoomableCoordeItem);
