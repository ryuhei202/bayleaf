export const PATTERNS = {
  PLAIN: "無地",
  BORDER: "ボーダー",
  DOT: "ドット",
  STRIPE: "ストライプ",
  CHECK: "チェック",
  CAMOUFLAGE: "迷彩",
  FLOWER: "花柄",
  LOGO: "ロゴ入り",
  OTHER: "その他",
} as const;

export type TPatterns = typeof PATTERNS[keyof typeof PATTERNS];
