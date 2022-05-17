export const AGE_CHOICES = {
  YOUNG: "若く感じた",
  OLD: "地味に感じた",
} as const;

export type TAGE_CHOICES = typeof AGE_CHOICES[keyof typeof AGE_CHOICES];
