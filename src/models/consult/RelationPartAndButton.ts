import { BOTTOMS, TOPS } from "./SizePart";
import { ITEM_LENGTH_BUTTON, ITEM_SIZE_BUTTON } from "./SizePartButton";

export const RELATION_PART_AND_BUTTON = {
  TOPS: [
    {
      part: TOPS.SHOULDER,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: TOPS.BUST,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: TOPS.LENGTH_ARM,
      buttonType: ITEM_LENGTH_BUTTON,
    },
    {
      part: TOPS.LENGTH_TOP,
      buttonType: ITEM_LENGTH_BUTTON,
    },
  ],
  BOTTOMS: [
    {
      part: BOTTOMS.WAIST,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: BOTTOMS.HIP,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: BOTTOMS.ROUND_LEG,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: BOTTOMS.ROUND_CALF,
      buttonType: ITEM_SIZE_BUTTON,
    },
    {
      part: BOTTOMS.LENGTH_LEG,
      buttonType: ITEM_LENGTH_BUTTON,
    },
  ],
} as const;
