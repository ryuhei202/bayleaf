import { createContext } from "react";
import "./App.css";
import { useAppInitializer } from "./hooks/handler/app/useAppInitializer";
import { Loader } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ErrorMessage } from "./components/shared/ErrorMessage";
import { Hearing } from "./pages/hearing/Hearing";
import { QueryClientProvider } from "react-query";
import { Review } from "./pages/review/Review";
import { Consult } from "./pages/consult/Consult";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Dressing } from "./pages/dressing/Dressing";
import { Dislike } from "./pages/dislike/Dislike";

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  integrations: [new BrowserTracing()],
  release: process.env.REACT_APP_VERSION,
  tracesSampleRate: 0,
  environment: process.env.REACT_APP_ENV,
});

export const IdTokenContext = createContext("");

export const StylistIdContext = createContext<number | undefined>(undefined);

function App() {
  const { lineIdToken, stylistId, liffErrorMessage, queryClient } =
    useAppInitializer();
  const app = (
    <QueryClientProvider client={queryClient}>
      <IdTokenContext.Provider value={lineIdToken}>
        <StylistIdContext.Provider value={stylistId}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="review" element={<Review />} />
            <Route path="hearing" element={<Hearing />} />
            <Route path="consult" element={<Consult />} />
            <Route path="dressing" element={<Dressing />} />
            <Route path="dislike" element={<Dislike />} />
          </Routes>
        </StylistIdContext.Provider>
      </IdTokenContext.Provider>
    </QueryClientProvider>
  );
  if (lineIdToken) {
    return (
      <Sentry.ErrorBoundary
        fallback={
          <ErrorMessage message="予期せぬエラーが発生いたしました。大変申し訳ございませんが、再度お願いいたします" />
        }
        showDialog
      >
        {app}
      </Sentry.ErrorBoundary>
    );
  }
  if (liffErrorMessage) {
    return <ErrorMessage message={liffErrorMessage} />;
  }
  return <Loader active>ログイン中</Loader>;
}

export default App;
