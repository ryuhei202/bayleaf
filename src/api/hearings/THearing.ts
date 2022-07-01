import { TCategorizedForm } from "./TCategorizedForm";

export type THearing = {
  readonly coordinateId: number;
  readonly categorizedForms: TCategorizedForm[];
};
