export type FormResponse = {
  readonly chartItemId: number;
  readonly itemImageUrl: string;
  readonly smallCategoryName: string;
  readonly sizeParts: {
    readonly value: number;
    readonly name: string;
  }[];
  readonly textFeedback: string;
};
