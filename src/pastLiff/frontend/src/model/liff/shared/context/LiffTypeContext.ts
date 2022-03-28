import * as React from "react";
import { LiffType } from "../../../../component/liff/LiffType";

export const LiffTypeContext = React.createContext<LiffType>(
  LiffType.MoreIndex // 何かしら設定する必要がありLiffRootで確実に書き換えるので一旦これを割り当てておく
);
