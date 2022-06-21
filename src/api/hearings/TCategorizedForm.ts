import { TForm } from "./TForm";

export type TCategorizedForm = {
  readonly categoryName: string;
  readonly forms: TForm[];
};
