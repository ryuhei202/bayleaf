export const COMBINATION_FORM = {
  IMAGE_SEND: "IMAGE_SEND",
  ITEM_CATEGORY: "ITEM_CATEGORY",
  ITEM_DETAIL: "ITEM_DETAIL",
} as const;
export type TCombiantionForm =
  typeof COMBINATION_FORM[keyof typeof COMBINATION_FORM];
