import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import React from "react";
import { useEffect, useState } from "react";
import liff from "@line/liff";
import { useLocation, useSearchParams } from "react-router-dom";
import ReactGA from "react-ga";
import { QueryClient } from "react-query";

export const useAppInitializer = () => {
  const [lineIdToken, setLineIdToken] = useState("");
  const [liffErrorMessage, setLiffErrorMessage] = useState("");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const lineId = searchParams.get("lineId");
  const convertedStylistId = Number(searchParams.get("stylistId") ?? undefined);
  const stylistId = isNaN(convertedStylistId) ? undefined : convertedStylistId;

  // bugsnagを呼び出す
  useEffect(() => {
    // ifがないとBugsnag.start時にAPI KEYがないとエラーが発生する。
    // .env.development.localにAPI KEYを記述すればエラーは消えるがローカルで使わないため分岐をかける。
    if (process.env.NODE_ENV === "production") {
      Bugsnag.start({
        apiKey: process.env.REACT_APP_BUGSNAG_API_KEY || "",
        plugins: [new BugsnagPluginReact()],
        enabledReleaseStages: ["production", "staging"],
        releaseStage: process.env.REACT_APP_ENV,
      });
    }
  }, []);

  // GoogleAnalyticsを呼び出す
  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [location]);

  // LINEのログイン処理を行う
  useEffect(() => {
    if (location.pathname === "/") {
      liff.init({ liffId: `${process.env.REACT_APP_LIFF_ID}` });
    } else {
      liff.init({ liffId: `${process.env.REACT_APP_LIFF_ID}` }).then(() => {
        // ローカルで開発する場合、クエリパラメータにLINE IDを直書きすることでデバッグできます。
        // e.g) http://localhost:3001/advice?lineId=xxx
        if (!liff.isLoggedIn() && process.env.NODE_ENV === "development") {
          if (lineId) {
            setLineIdToken(lineId);
          } else {
            setLiffErrorMessage("LINE ID いれなさい");
          }
        } else {
          setLineIdToken(liff.getIDToken() ?? "");
          if (!liff.isInClient()) {
            setLiffErrorMessage("スマホのLINEアプリから開いてください。");
          }
        }
      });
    }
  });
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return {
    lineIdToken,
    stylistId,
    liffErrorMessage,
    queryClient,
  };
};
