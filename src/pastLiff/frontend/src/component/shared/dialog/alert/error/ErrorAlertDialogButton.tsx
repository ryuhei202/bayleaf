import * as React from "react";
import { ErrorAlertDialogButtonViewData } from "./viewData/ErrorAlertDialogButtonViewData";
import { ErrorAlertDialogButtonCallback } from "./callback/ErrorAlertDialogButtonCallback";
import LeeapButton from "../../../LeeapButton";

// ----------------------------------------
// props
// ----------------------------------------
interface ErrorAlertDialogButtonProps {
  viewData: ErrorAlertDialogButtonViewData;
  callback: ErrorAlertDialogButtonCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
/**
 * エラーダイアログボタン
 */
const ErrorAlertDialogButton = (props: ErrorAlertDialogButtonProps) => (
  <LeeapButton onClick={() => props.callback.onClick()} colors={"default"}>
    {props.viewData.label}
  </LeeapButton>
);

export default ErrorAlertDialogButton;
