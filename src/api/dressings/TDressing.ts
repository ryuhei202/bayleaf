import { TCategorizedForm } from "../hearings/TCategorizedForm";
import { TDressingAdvice } from "./TDressingAdvice";
import { TDressingChangeItem } from "./TDressingChangeItem";
import { TDressingComment } from "./TDressingComment";
import { TDressingFootwear } from "./TDressingFootwear";

export type TDressing = {
  readonly coordinateId: number;
  readonly categorizedForms: Omit<TCategorizedForm, "categoryId">[] | null;
  readonly description: string | null;
  readonly comment: TDressingComment | null;
  readonly advices: TDressingAdvice[];
  readonly footwear: TDressingFootwear | null;
  readonly changeItems: TDressingChangeItem[] | null;
};
