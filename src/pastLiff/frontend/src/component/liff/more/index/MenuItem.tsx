import React from "react";
import { MenuItemViewData } from "./viewData/MenuItemViewData";
import { baseUrl } from "../../../../model/shared/BaseUrl";
import LeeapButton from "../../../shared/LeeapButton";
import { MenuItemCallback } from "./callback/MenuItemCallback";

// ----------------------------------------
// props
// ----------------------------------------
interface MenuItemProps {
  viewData: MenuItemViewData;
  callback: MenuItemCallback;
}

// ----------------------------------------
// component
// ----------------------------------------
const MenuItem = (props: MenuItemProps) => (
  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------

  <LeeapButton
    colors="default"
    onClick={() =>
      props.callback.onClickMenu(`${baseUrl}${props.viewData.path}`)
    }
    size="large"
    fullWidth
  >
    {props.viewData.name}
  </LeeapButton>
);

export default MenuItem;
