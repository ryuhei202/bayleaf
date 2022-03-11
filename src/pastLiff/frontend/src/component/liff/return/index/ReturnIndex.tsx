import React from "react";
import { HashRouter, Redirect, Route } from "react-router-dom";
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
        exact
        path={""}
        render={() => <Redirect to={ReturnIndexRouting.returnSelect} />}
      />
      <Route
        path={ReturnIndexRouting.returnSelect}
        render={() => <ReturnSelect />}
      />
    </HashRouter>
  );
};

export default ReturnIndex;
