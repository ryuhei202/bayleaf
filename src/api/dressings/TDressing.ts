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
export type TNonNullableDressing = RequiredNotNull<TDressing>;
