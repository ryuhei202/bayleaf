import React from "react";
import { HashRouter, Navigate, Route } from "react-router-dom";
import ReturnSelect from "../select/ReturnSelect";
import { ReturnIndexRouting } from "./routing/ReturnIndexRouting";

// ----------------------------------------
// component
// ----------------------------------------
const ReturnIndex = () => {
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <HashRouter>
      <Route
        path={""}
        element={() => <Navigate to={ReturnIndexRouting.returnSelect} />}
      />
      <Route
        path={ReturnIndexRouting.returnSelect}
        element={() => <ReturnSelect />}
      />
    </HashRouter>
  );
};

export default ReturnIndex;
