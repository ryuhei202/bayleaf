import { TPatterns } from "./../shared/TPatterns";
import { TColors } from "../shared/TColors";
import { TCombinationItemCategory } from "./TCombinationItemCategory";
import { TImagePathsResponse } from "../../api/shared/TImagePathsResponse";

export type TPersonalItem = {
  readonly image?: TImagePathsResponse;
  readonly cateLargeName?: TCombinationItemCategory;
  readonly cateSmallName?: string;
  readonly color?: TColors;
  readonly pattern?: TPatterns;
  readonly additionalText?: string;
};
