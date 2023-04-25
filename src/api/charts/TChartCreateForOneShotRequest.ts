import { THearingParams } from "./THearingParams";

export type TChartCreateForOneShotRequest = {
  readonly memberId: number;
  readonly hearings: THearingParams[];
  readonly deliveryDate: string;
  readonly isSelectableBRank: boolean;
  readonly priceTaxIn: number;
};
