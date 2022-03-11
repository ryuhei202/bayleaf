import React from "react";
import Menu from "./Menu";
import { useMoreIndexPresenter } from "./presenter/UseMoreIndexPresenter";

// ----------------------------------------
// component
// ----------------------------------------
const MoreIndex = () => {
  const presenter = useMoreIndexPresenter();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return <Menu viewData={presenter.viewData()} />;
};

export default MoreIndex;
