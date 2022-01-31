import { createContext } from "react";
import "./App.css";
import { useAppInitializer } from "./hooks/handler/app/useAppInitializer";
import { Loader } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";
import Home from "./pages/Home";
import { ErrorMessage } from "./components/shared/ErrorMessage";
import { Hearing } from "./pages/hearing/Hearing";
import { QueryClientProvider } from "react-query";

export const IdTokenContext = createContext("");

export const StylistIdContext = createContext<number | undefined>(undefined);

function App() {
  const {
    lineIdToken,
    stylistId,
    liffErrorMessage,
    ErrorBoundary,
    queryClient,
  } = useAppInitializer();
  const app = (
    <QueryClientProvider client={queryClient}>
      <IdTokenContext.Provider value={lineIdToken}>
        <StylistIdContext.Provider value={stylistId}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="review" element={<Review />} />
            <Route path="hearing" element={<Hearing />} />
          </Routes>
        </StylistIdContext.Provider>
      </IdTokenContext.Provider>
    </QueryClientProvider>
  );
  if (lineIdToken) {
    return <>{ErrorBoundary ? <ErrorBoundary>{app}</ErrorBoundary> : app}</>;
  }
  if (liffErrorMessage) {
    return <ErrorMessage message={liffErrorMessage} />;
  }
  return <Loader active>ログイン中</Loader>;
}

export default App;
