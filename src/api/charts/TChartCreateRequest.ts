import { THearingParams } from "./THearingParams";

export type TChartCreateRequest = {
  memberId: number;
  hearings: THearingParams[];
};
