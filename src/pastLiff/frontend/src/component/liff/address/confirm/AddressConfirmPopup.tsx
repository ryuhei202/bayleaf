import React, { useContext, useEffect, useState } from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import StickAlert from "../../shared/stickAlert/StickAlert";
import { useAddressConfirmPopupPresenter } from "./presenter/UseAddressConfirmPopupPresenter";
import { AddressConfirmPopupViewData } from "./viewData/AddressConfirmPopupViewData";
import { AddressConfirmPopupStatusType } from "./shared/AddressConfirmPopupStatusType";
import { AddressConfirmPopupCallback } from "./callback/AddressConfirmPopupCallback";
import { useAddressConfirmPopupHandler } from "./handler/UseAddressConfirmPopupHandler";
import { useStickAlertHandler } from "../../shared/stickAlert/handler/UseStickAlertHandler";
import LeeapButton from "../../../shared/LeeapButton";
import { CloseLiffContext } from "../../../../model/liff/shared/context/CloseLiffContext";
import InitializingLoader from "../../../shared/transitions/loader/InitializingLoader";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      minHeight: "140px",
      width: "100%"
    },
    popup: {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end",
      width: "100%"
    },
    explain: {
      height: "80px",
      fontSize: "14px"
    },
    actions: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "flex-end"
    },
    sectionSucceededWrapper: {
      textAlign: "center",
      fontSize: "16px"
    },
    sectionSucceededIcon: {
      marginTop: "12px",
      fontSize: "36px",
      color: "#00266F"
    },
    sectionSucceededExplain: {
      marginTop: "6px",
      fontSize: "12px",
      color: "#6e6e6e"
    }
  });
};

// ----------------------------------------
// props
// ----------------------------------------
interface AddressConfirmPopupProps {
  viewData: AddressConfirmPopupViewData;
  callback: AddressConfirmPopupCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const AddressConfirmPopup = (
  props: AddressConfirmPopupProps & WithStyles<typeof styles>
) => {
  const POPUP_CLOSE_TIMEOUT = 4 * 1000;

  // ----------------------------------------
  // Status
  // ----------------------------------------
  const [_status, setStatus] = useState<AddressConfirmPopupStatusType>(
    AddressConfirmPopupStatusType.Idle
  );

  // ----------------------------------------
  // Callbacks
  // ----------------------------------------
  const onStatusChanged = (status: AddressConfirmPopupStatusType) => {
    setStatus(status);
  };
  const moveFirstPageAndClose = () => {
    handler.onPopupClose();
    // close処理中に画面表示が変わってしまうため、対応
    setTimeout(() => {
      setStatus(AddressConfirmPopupStatusType.Idle);
    }, 600);
  };

  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const presenter = useAddressConfirmPopupPresenter(props.viewData.open);
  const handler = useAddressConfirmPopupHandler(
    onStatusChanged,
    props.callback.onClose,
    props.callback.onError,
    props.viewData.formData
  );
  const stickHandler = useStickAlertHandler();
  const closeLiffContext = useContext(CloseLiffContext);

  // ----------------------------------------
  // Effect
  // ----------------------------------------
  useEffect(() => {
    if (_status === AddressConfirmPopupStatusType.Succeeded) {
      setTimeout(() => {
        moveFirstPageAndClose();
        // LIFFを閉じる
        closeLiffContext();
      }, POPUP_CLOSE_TIMEOUT);
    }
  }, [_status]);

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <div className={props.classes.root}>
      <StickAlert
        viewData={presenter.stickAlertViewData()}
        callback={stickHandler.stickAlertCallback()}
        style={{
          height: "140px",
          width: "100%"
        }}
      >
        {_status === AddressConfirmPopupStatusType.Idle ? (
          <section className="idle">
            <div className={props.classes.explain}>
              住所情報を登録しますか？
            </div>
            <div className={props.classes.actions}>
              <LeeapButton
                colors="border"
                size="small"
                style={{
                  boxShadow: "none",
                  marginRight: "16px"
                }}
                onClick={() => {
                  handler.onPopupClose();
                }}
              >
                いいえ
              </LeeapButton>
              <LeeapButton
                colors="primary"
                size="small"
                onClick={() => {
                  handler.onSubmit();
                }}
              >
                登録する
              </LeeapButton>
            </div>
          </section>
        ) : null}

        {_status === AddressConfirmPopupStatusType.Processing ? (
          <section className="processing">
            <InitializingLoader
              viewData={presenter.initializingLoaderViewData()}
            />
          </section>
        ) : null}

        {_status === AddressConfirmPopupStatusType.Succeeded ? (
          <section className="succeeded">
            <div className={props.classes.sectionSucceededWrapper}>
              <CheckCircleIcon className={props.classes.sectionSucceededIcon} />
              <div>登録が完了しました</div>
              <div className={props.classes.sectionSucceededExplain}>
                引き続きコーデ作成に必要な質問にお答えください
              </div>
            </div>
          </section>
        ) : null}

        {_status === AddressConfirmPopupStatusType.Failed ? (
          <section className="failed">
            <div className={props.classes.explain}>
              入力内容に不備があります。
              <br />
              正しい内容を再度入力してください。
            </div>

            <div className={props.classes.actions}>
              <LeeapButton
                colors="border"
                size="small"
                onClick={() => {
                  moveFirstPageAndClose();
                }}
              >
                はい
              </LeeapButton>
            </div>
          </section>
        ) : null}
      </StickAlert>
    </div>
  );
};

export default withStyles(styles)(AddressConfirmPopup);
