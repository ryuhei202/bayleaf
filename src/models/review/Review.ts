export type Review = {
  readonly chartItemId: number;
  readonly rating: any;
  readonly sizeErrors: {
    readonly sizePart: number;
    readonly errorType: number;
  }[];
  readonly freeText: string;
};
