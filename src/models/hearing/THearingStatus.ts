export const HEARING_STATUS = {
  DO_NOTHING: 0,
  HEARING_EDITING: 1,
  SLEEVE_EDITING: 2,
  CONFIRM: 3,
} as const;

export type THearingStatus = typeof HEARING_STATUS[keyof typeof HEARING_STATUS];
