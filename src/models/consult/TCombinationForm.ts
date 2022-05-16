export const COMBINATION_FORM = {
  IMAGE_SEND: 0,
  ITEM_CATEGORY: 1,
  ITEM_DETAIL: 2,
} as const;
export type TCombiantionForm =
  typeof COMBINATION_FORM[keyof typeof COMBINATION_FORM];
