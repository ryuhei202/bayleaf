import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "./MenuItem";
import { useMenuGroupPresenter } from "./presenter/UseMenuGroupPresenter";
import { MenuGroupViewData } from "./viewData/MenuGroupViewData";
import MenuDivider from "../shared/MenuDivider";
import { useMenuGroupHandler } from "./handler/UseMenuGroupHandler";

// ----------------------------------------
// props
// ----------------------------------------
interface MenuGroupProps {
  viewData: MenuGroupViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const MenuGroup = (props: MenuGroupProps) => {
  const presenter = useMenuGroupPresenter(props.viewData);
  const handler = useMenuGroupHandler();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <>
      {presenter.menuItemViewDatas().map((viewData, index) => {
        return (
          <Grid key={index} item xs={6}>
            <MenuItem
              viewData={viewData}
              callback={handler.menuItemCallback()}
            />
          </Grid>
        );
      })}
      {props.viewData.needDivider && <MenuDivider />}
    </>
  );
};

export default MenuGroup;
