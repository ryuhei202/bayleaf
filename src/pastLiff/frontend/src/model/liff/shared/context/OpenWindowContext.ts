import * as React from "react";

export const OpenWindowContext = React.createContext(
  // linkを使ってないとコンパイル時に言われるので無視させる
  // @ts-ignore
  (link: string): void => {}
);
