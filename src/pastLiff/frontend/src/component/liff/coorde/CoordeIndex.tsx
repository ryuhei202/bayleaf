import React from "react";
import { useFetchCoorde } from "../../../model/liff/coorde/call_api/UseFetchCoorde";
import { useCoordeIndexPresenter } from "./presenter/UseCoordeIndexPresenter";
import ErrorAlertDialog from "../../shared/dialog/alert/error/ErrorAlertDialog";
import { useCoordeIndexHandler } from "./handler/UseCoordeIndexHandler";
import ProgressDialog from "../../shared/dialog/progress/ProgressDialog";

// ----------------------------------------
// component
// ----------------------------------------
/**
 * タイトル
 */
const CoordeIndex = () => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const fetchCoorde = useFetchCoorde();
  const apiCallProcess = fetchCoorde.apiCallProcess();

  const handler = useCoordeIndexHandler(apiCallProcess);
  const presenter = useCoordeIndexPresenter(
    apiCallProcess.isRunning(),
    apiCallProcess.errorResponse()
  );

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <React.Fragment>
      <ErrorAlertDialog
        viewData={presenter.errorAlertDialogViewData()}
        callback={handler.errorAlertDialogCallback()}
      />
      <ProgressDialog viewData={presenter.progressDialogViewData()} />
    </React.Fragment>
  );
};

export default CoordeIndex;
