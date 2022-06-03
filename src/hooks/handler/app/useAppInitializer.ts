import { useEffect, useState } from "react";
import liff from "@line/liff";
import { useLocation, useSearchParams } from "react-router-dom";
import { QueryClient } from "react-query";

declare global {
  interface Window {
    gtag?: Gtag.Gtag;
  }
}

export const useAppInitializer = () => {
  const [lineIdToken, setLineIdToken] = useState("");
  const [liffErrorMessage, setLiffErrorMessage] = useState("");
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const lineId = searchParams.get("lineId");
  const convertedStylistId = Number(searchParams.get("stylistId") ?? undefined);
  const stylistId = isNaN(convertedStylistId) ? undefined : convertedStylistId;

  // GoogleAnalyticsを呼び出す
  useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      if (!window.gtag) return;
      window.gtag("config", process.env.REACT_APP_GA_TRACKING_ID, {
        page_path: location.pathname,
      });
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
