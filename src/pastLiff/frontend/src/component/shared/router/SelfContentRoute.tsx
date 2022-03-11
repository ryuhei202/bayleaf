import React from "react";
import { Route, RouteProps, useLocation } from "react-router";

// ----------------------------------------
// component
// ----------------------------------------
// 各画面自身のコンテンツをRouteで囲む時に使う。exactとかrouteMatchは共通で設定するため。
const SelfContentRoute = (props: RouteProps) => {
  const routeMatch = useLocation();

  return <Route path={`${routeMatch.pathname}`} {...props} />;
};

export default SelfContentRoute;
