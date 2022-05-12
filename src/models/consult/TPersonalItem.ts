import { TPatterns } from "./../shared/TPatterns";
import { TColors } from "../shared/TColors";
import { TCombinationItemCategory } from "./TCombinationItemCategory";

export type TPersonalItem = {
  readonly image?: string;
  readonly cateLargeName?: TCombinationItemCategory;
  readonly cateSmallName?: string;
  readonly color?: TColors;
  readonly pattern?: TPatterns;
  readonly additionalText?: string;
};
