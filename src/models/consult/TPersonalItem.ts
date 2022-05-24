import { TCombinationDetails } from "./TCombinationItemDetails";
import { TPatterns } from "./../shared/TPatterns";
import { TColors } from "../shared/TColors";

export type TPersonalItem = {
  readonly cateSmallName: TCombinationDetails;
  readonly color: TColors;
  readonly pattern: TPatterns;
  readonly additionalText?: string;
};
