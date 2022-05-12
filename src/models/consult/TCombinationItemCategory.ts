export const COMBINATION_ITEM_CATEGORY = {
  OUTOR: "アウター",
  TOPS: "トップス",
  BOTTOMS: "ボトムス",
  SHOES: "シューズ",
  BAG: "バッグ",
  HAT: "帽子",
} as const;

export type TCombinationItemCategory =
  typeof COMBINATION_ITEM_CATEGORY[keyof typeof COMBINATION_ITEM_CATEGORY];
