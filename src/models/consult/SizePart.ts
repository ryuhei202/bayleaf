export const TOPS = {
  SHOULDER: "肩幅",
  BUST: "胸囲",
  LENGTH_ARM: "袖",
  LENGTH_TOP: "丈",
} as const;
export const BOTTOMS = {
  WAIST: "ウエスト",
  HIP: "ヒップ",
  ROUND_LEG: "もも",
  ROUND_CALF: "ふくらはぎ",
  LENGTH_LEG: "股下",
} as const;

export type TOPS_TYPE = typeof TOPS[keyof typeof TOPS];
export type BOTTOMS_TYPE = typeof BOTTOMS[keyof typeof BOTTOMS];
