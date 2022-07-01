import { useEffect, useState } from "react";
import liff from "@line/liff";
import { useLocation, useSearchParams } from "react-router-dom";
import { QueryClient } from "react-query";
import * as Sentry from "@sentry/react";
import LIFFInspectorPlugin from "@line/liff-inspector";

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
      // gtag.jsをheadに埋め込む
      const gtagScript = document.createElement("script");
      gtagScript.id = "gtagScript";
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_TRACKING_ID}`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);
      // 実行用scriptをheadに埋め込む
      const execScript = document.createElement("script");
      execScript.id = "execScript";
      execScript.text = `window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', '${process.env.REACT_APP_GA_TRACKING_ID}');`;
      document.head.appendChild(execScript);
      if (!window.gtag) return;
      window.gtag("config", process.env.REACT_APP_GA_TRACKING_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);

  // LINEのログイン処理を行う
  useEffect(() => {
    if (location.pathname === "/") {
      liff.use(new LIFFInspectorPlugin());
      liff.init({ liffId: `${process.env.REACT_APP_LIFF_ID}` });
    } else {
      liff.use(new LIFFInspectorPlugin());
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
          liff.getProfile().then((profile) => {
            Sentry.setUser({ id: profile.userId, name: profile.displayName });
          });
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
