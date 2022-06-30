import { TForm } from "./TForm";

export type TCategorizedForm = {
  readonly categoryId: number;
  readonly categoryName: string;
  readonly forms: TForm[];
};
