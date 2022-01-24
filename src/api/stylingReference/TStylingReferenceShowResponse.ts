export type TStylingReferenceShowResponse = {
  readonly categoryId: number;
  readonly choices: {
    readonly id: number;
    readonly name: string;
  }[];
  readonly text: string;
};
