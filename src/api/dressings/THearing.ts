export type TSimplifiedHearing = {
  target: string;
  scene: string;
  impression: string;
};

// 型TSimplifiedHearingeを全てnot nullにする
type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
export type TNonNullableHearing = RequiredNotNull<TSimplifiedHearing>;
