import React from "react";
import Menu from "./Menu";
import { useMarriageMoreIndexPresenter } from "./presenter/UseMarriageMoreIndexPresenter";

// ----------------------------------------
// component
// ----------------------------------------
const MarriageMoreIndex = () => {
  const presenter = useMarriageMoreIndexPresenter();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return <Menu viewData={presenter.viewData()} />;
};

export default MarriageMoreIndex;
