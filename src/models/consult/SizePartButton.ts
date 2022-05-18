export const ITEM_SIZE_BUTTON = {
  SMALL: "小さい",
  FIT: "丁度いい",
  BIG: "大きい",
} as const;
export const ITEM_LENGTH_BUTTON = {
  SHORT: "短い",
  FIT: "丁度いい",
  LONG: "長い",
} as const;

export type TItemSizeButton =
  typeof ITEM_SIZE_BUTTON[keyof typeof ITEM_SIZE_BUTTON];
export type TItemLengthButton =
  typeof ITEM_LENGTH_BUTTON[keyof typeof ITEM_LENGTH_BUTTON];
