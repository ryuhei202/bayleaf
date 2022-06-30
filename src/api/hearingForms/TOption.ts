export type TOption = {
  readonly id: number;
  readonly name: string;
  readonly nextFormId: number | null;
  readonly isText: boolean;
  readonly isSingleAnswer: boolean;
};
