import React from "react";
import Grid from "@material-ui/core/Grid";
import ReturnSelectItem from "./ReturnSelectItem";
import { useReturnSelectPresenter } from "./presenter/UseReturnSelectPresenter";
import { Route } from "react-router";
import ReturnReserve from "../reserve/ReturnReserve";
import SelfContentRoute from "../../../shared/router/SelfContentRoute";
import { ReturnSelectRouting } from "./routing/ReturnSelectRouting";
import { usePathGenerator } from "../../../shared/router/UsePathGenerator";
import { useReturnSelectHandler } from "./handler/UseReturnSelectHandler";

// ----------------------------------------
// component
// ----------------------------------------
const ReturnSelect = () => {
  // ----------------------------------------
  // Hooks
  // ----------------------------------------
  const handler = useReturnSelectHandler();
  const presenter = useReturnSelectPresenter(handler.selectedReserveType());
  const pathGenerator = usePathGenerator();

  // ----------------------------------------
  // Life Cycle
  // ----------------------------------------
  return (
    <>
      <SelfContentRoute
        element={() => (
          <Grid container spacing={1}>
            {presenter.selectItemViewDatas().map((viewData, index) => {
              return (
                <Grid key={index} item xs={6}>
                  <ReturnSelectItem
                    viewData={viewData}
                    callback={handler.returnSelectItemCallback()}
                  />
                </Grid>
              );
            })}
          </Grid>
        )}
      />

      <Route
        path={pathGenerator.generateWithIdKey(ReturnSelectRouting.reserve)}
        element={() => (
          <ReturnReserve viewData={presenter.returnReserveViewData()} />
        )}
      />
    </>
  );
};

export default ReturnSelect;
