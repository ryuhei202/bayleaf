export const COLORS = {
  WHITE: "ホワイト",
  GRAY: "グレー",
  BLACK: "ブラック",
  BRAWN: "ブラウン",
  BEIGE: "ベージュ",
  RED: "レッド",
  DARK_RED: "エンジ",
  ORANGE: "オレンジ",
  YELLOW: "イエロー",
  PINK: "ピンク",
  BLUE: "ブルー",
  NAVY: "ネイビー",
  GREEN: "グリーン",
  KHAKI: "カーキ",
  PURPLE: "パープル",
  OTHER: "その他",
} as const;

export type TColors = typeof COLORS[keyof typeof COLORS];
