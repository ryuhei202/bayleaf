import { THearingParams } from "./THearingParams";

export type TChartCreateForPlanRequest = {
  readonly memberId: number;
  readonly hearings: THearingParams[];
};
