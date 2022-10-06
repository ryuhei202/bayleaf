export const DELIVERY_TIMES = {
  1: "午前",
  3: "14〜16時",
  4: "16〜18時",
  5: "18〜20時",
  6: "19〜21時",
  7: "指定なし",
} as const;

export type TDeriveryTimes = typeof DELIVERY_TIMES[keyof typeof DELIVERY_TIMES];
