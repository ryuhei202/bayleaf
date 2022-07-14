import { TCategorizedForm } from "../hearings/TCategorizedForm";
import { TDressingAdvice } from "./TDressingAdvice";
import { TDressingCoordinateItem } from "./TDressingCoordinateItem";
import { TDressingComment } from "./TDressingComment";
import { TDressingFootwear } from "./TDressingFootwear";

export type TDressing = {
  readonly coordinateId: number;
  readonly categorizedForms: TCategorizedForm[] | null;
  readonly description: string | null;
  readonly comment: TDressingComment | null;
  readonly advices: TDressingAdvice[];
  readonly footwear: TDressingFootwear | null;
  readonly coordinateItems: TDressingCoordinateItem[];
};

// 型TDressingを全てnot nullにする
type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
type Ensure<T, K extends keyof T> = T & RequiredNotNull<Pick<T, K>>;
export type TNonNullableDressing = Ensure<
  TDressing,
  "categorizedForms" | "description" | "comment" | "footwear"
>;
