import { Option } from "./Option";

export type HearingFormShowResponse = {
  readonly id: number;
  readonly categoryId: number;
  readonly categoryName: string;
  readonly multipleAnswerNextFormId: number;
  readonly title: string;
  readonly options: Option[];
};
