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
