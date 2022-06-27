export const HEARING_STATUS = {
  FIRST: 0,
  HEARING_EDITING: 1,
  CONFIRM: 2,
} as const;

export type THearingStatus = typeof HEARING_STATUS[keyof typeof HEARING_STATUS];
