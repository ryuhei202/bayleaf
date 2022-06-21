import { THearingParams } from "./THearingParams";

export type TChartCreateRequest = {
  memberId: number;
  sameCoordinateId?: number;
  hearings?: THearingParams[];
};
