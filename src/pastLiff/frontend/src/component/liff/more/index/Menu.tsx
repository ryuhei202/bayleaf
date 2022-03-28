import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import MenuGroup from "./MenuGroup";
import { useMenuPresenter } from "./presenter/UseMenuPresenter";
import { MenuViewData } from "./viewData/MenuViewData";

// ----------------------------------------
// props
// ----------------------------------------
interface MenuProps {
  viewData: MenuViewData;
}

// ----------------------------------------
// component
// ----------------------------------------
const Menu = (props: MenuProps) => {
  const presenter = useMenuPresenter(props.viewData.groups);

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  useEffect(() => {
    document.title = props.viewData.title;
  });

  return (
    <Grid container spacing={1}>
      {presenter.viewDatas().map((viewData, index) => {
        return <MenuGroup key={index} viewData={viewData} />;
      })}
    </Grid>
  );
};

export default Menu;
