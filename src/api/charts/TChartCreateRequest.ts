import { HearingParams } from "./HearingParams";

export type TChartCreateRequest = {
  memberId: number;
  hearings: HearingParams[];
};
