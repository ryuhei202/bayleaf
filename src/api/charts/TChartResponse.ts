export type TChartResponse = {
  readonly id: number;
  readonly rentalStartedAt: string | null;
  readonly itemImagePaths: string[];
  readonly planName: string;
  readonly planId: number;
};
