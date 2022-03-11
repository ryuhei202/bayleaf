import React, { useState, useEffect } from "react";
import VConsole from "vconsole/dist/vconsole.min";
import Theme from "../../model/shared/Theme";
import { LiffType } from "./LiffType";
import Script from "react-load-script";
import CssBaseline from "@material-ui/core/CssBaseline/index";
import { Slide, Modal, MuiThemeProvider } from "@material-ui/core";
import CoordeIndex from "./coorde/CoordeIndex";
import MoreIndex from "./more/index/MoreIndex";
import ReturnIndex from "./return/index/ReturnIndex";
import { LiffTypeContext } from "../../model/liff/shared/context/LiffTypeContext";
import { MemberAuthContext } from "../../model/liff/shared/context/MemberAuthContext";
import { CloseLiffContext } from "../../model/liff/shared/context/CloseLiffContext";
import { OpenWindowContext } from "../../model/liff/shared/context/OpenWindowContext";
import { useSession } from "../../model/shared/Session/UseSession";
import SessionSignIn from "./session/signIn/SessionSignIn";
import AddressIndex from "./address/index/AddressIndex";
import MarriageMoreIndex from "./more/index/MarriageMoreIndex";

// ----------------------------------------
// component
// ----------------------------------------
/**
 * タイトル
 */
const LiffRoot = props => {
  // ----------------------------------------
  // State
  // ----------------------------------------
  const session = useSession();
  const [authInfo, setAuthInfo] = useState(session.getMemberAuth());
  const [isShowSignIn, setIsShowSignIn] = useState(false);

  // ----------------------------------------
  // Function
  // ----------------------------------------
  /**
   * レイアウト
   */
  const layout = () => {
    switch (props.type) {
      case LiffType.CoordeIndex:
        return <CoordeIndex />;
      case LiffType.MoreIndex:
        return <MoreIndex />;
      case LiffType.MarriageMoreIndex:
        return <MarriageMoreIndex />;
      case LiffType.ReturnIndex:
        return <ReturnIndex />;
      case LiffType.AddressIndex:
        return <AddressIndex />;
      default:
        return <div />;
    }
  };

  /**
   * LIFFを閉じるイベント発行
   */
  const close = () => {
    window.liff.closeWindow();
  };

  /**
   * リンクを新しいウインドウで開く
   */
  const openWindow = (link) => {
    window.liff.openWindow({
      url: link,
      external: false
    });
  };

  /**
   * コンソール表示が必要か
   */
  const shouldShowConsole = () => {
    return process.env.NODE_ENV === "development";
  };

  /**
   * ログインが必要な状態か
   * @returns {boolean}
   */
  const shouldSignIn = () => {
    return !session.isSigned();
  };

  /**
   * AuthInfoを最新にする
   */
  const updateToCurrentAuthInfo = () => {
    setAuthInfo(session.getMemberAuth());
  };

  // ----------------------------------------
  // Event
  // ----------------------------------------
  /**
   * スクリプトロード成功
   */
  const onLoad = () => {
    window.liff
      .init({
        liffId: props.liffId
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };

  /**
   * スクリプトロード失敗
   */
  const onError = () => {
    console.log("failed to load liff sdk.");
  };

  /**
   * ログイン完了
   */
  const onSignIn = () => {
    updateToCurrentAuthInfo();
    setIsShowSignIn(false);
  };

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  useEffect(() => {
    // コンソール表示
    if (shouldShowConsole()) {
      new VConsole();
    }
    if (shouldSignIn()) {
      session.clearMemberAuth();
      updateToCurrentAuthInfo();
      setIsShowSignIn(true);
    }
  }, []);

  return (
    <MuiThemeProvider theme={Theme}>
      <LiffTypeContext.Provider value={props.type}>
        <MemberAuthContext.Provider value={authInfo}>
          <CloseLiffContext.Provider value={close}>
            <OpenWindowContext.Provider value={openWindow}>
              <Script
                url="https://static.line-scdn.net/liff/edge/2.1/sdk.js"
                onLoad={onLoad}
                onError={onError}
              />
              <CssBaseline />
              {layout()}
              <Modal open={isShowSignIn}>
                <Slide direction={"up"} in={isShowSignIn}>
                  <div style={{width: '100%', height: '100%'}}>
                    <SessionSignIn callback={{onSignIn: onSignIn}}/>
                  </div>
                </Slide>
              </Modal>
            </OpenWindowContext.Provider>
          </CloseLiffContext.Provider>
        </MemberAuthContext.Provider>
      </LiffTypeContext.Provider>
    </MuiThemeProvider>
  );
};

export default LiffRoot;
