import { createContext } from "react";
import "./App.css";
import { useAppInitializer } from "./hooks/handler/app/useAppInitializer";
import { Loader } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import Review from "./pages/Review";
import Home from "./pages/Home";
import { ErrorMessage } from "./components/shared/ErrorMessage";

export const IdTokenContext = createContext("");

function App() {
  const { lineIdToken, liffErrorMessage, ErrorBoundary } = useAppInitializer();
  const app = (
    <IdTokenContext.Provider value={lineIdToken}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="review" element={<Review />} />
      </Routes>
    </IdTokenContext.Provider>
  );
  if (lineIdToken) {
    return (
      <>
        {process.env.NODE_ENV === "production" ? (
          <ErrorBoundary>{app}</ErrorBoundary>
        ) : (
          app
        )}
      </>
    );
  }
  if (liffErrorMessage) {
    return <ErrorMessage message={liffErrorMessage} />;
  }
  return <Loader inline="centered">ログイン中</Loader>;
}

export default App;
