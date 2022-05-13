export const MEMBER_PHOTO_CATEGORY_ID = {
  WEARING: 1,
  PERSONALITEM: 2,
} as const;

export type MEMBER_PHOTO_CATEGORY_ID_TYPE =
  typeof MEMBER_PHOTO_CATEGORY_ID[keyof typeof MEMBER_PHOTO_CATEGORY_ID];
