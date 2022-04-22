export type TKarteIndexResponse = {
  readonly kartes: {
    readonly id: number;
    readonly rentalStartedAt: string;
    readonly itemImagePaths: string[];
    readonly planName: string;
  }[];
};
