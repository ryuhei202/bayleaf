export type FormResponse = {
  readonly chartItemId: number;
  readonly itemImageUrl: string;
  readonly sizeParts: {
    readonly value: number;
    readonly name: string;
  }[];
};
