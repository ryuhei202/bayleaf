import * as React from "react";
import { InitializingLoaderViewData } from "./viewData/InitializingLoaderViewData";
import {
  CircularProgress,
  createStyles,
  withStyles,
  WithStyles,
} from "@material-ui/core";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      overflow: "hidden",
    },
    progressWrapper: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
    progress: {
      opacity: ".74",
    },
    label: {
      fontSize: "14px",
    },
  });
};

// ----------------------------------------
// Props
// ----------------------------------------
interface InitializingLoaderProps {
  viewData?: InitializingLoaderViewData;
}

// ----------------------------------------
// Component
//  -> 初期表示時のAPIローディング処理のローダーとして利用する
//  画面表示後は、ProgressDialogを使用する
//  （画面が描画されていない状態で、いきなりmodal表示させるとビジュアル的に違和感があったので作成）
// ----------------------------------------
const InitializingLoader = (
  props: InitializingLoaderProps & WithStyles<typeof styles>
) => (
  <React.Fragment>
    <div className={props.classes.root}>
      <div className={props.classes.progressWrapper}>
        <CircularProgress className={props.classes.progress} />
        <p className={props.classes.label}>
          {props.viewData && props.viewData.label
            ? props.viewData.label
            : "データを取得しています.."}
        </p>
      </div>
    </div>
  </React.Fragment>
);

export default withStyles(styles)(InitializingLoader);
