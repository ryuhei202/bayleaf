import {
  COMBINATION_ITEM_CATEGORY,
  TCombinationItemCategory,
} from "./TCombinationItemCategory";

export namespace COMBINATION_ITEM_DETAILS {
  export const OUTER = {
    JACKET: "ジャケット",
    BLOUSON: "ブルゾン",
    DOWN_COAT: "ダウン",
    COAT: "コート",
  } as const;

  export const TOPS = {
    LONG_SHIRT: "長袖シャツ",
    SHORT_SHIRT: "半袖シャツ",
    CUTSAW: "カットソー",
    T_SHIRT: "Tシャツ",
    POLO_SHIRT: "ポロシャツ",
    KNIT: "ニット",
    CARDIGAN: "カーディガン",
    SWEAT_SHIRT: "トレーナー",
    HOODIE: "パーカー",
  } as const;

  export const BOTTOMS = {
    JEANS: "ジーンズ",
    CHINOS: "チノパン",
    CARGO: "カーゴ",
    SLACKS: "スラックス",
    HALF_PANTS: "ハーフパンツ",
  } as const;

  export const SHOES = {
    SNEAKERS: "スニーカー",
    LEATHER: "革靴",
    BOOTS: "ブーツ",
    SANDALS: "サンダル",
  } as const;

  export const BAG = {
    TOTE: "トートバッグ",
    SHOULDER: "ショルダーバッグ",
    RUCK_SACK: "リュック",
    CLUTCH: "クラッチバッグ",
  } as const;

  export const HAT = {
    CAP: "キャップ",
    HAT: "ハット",
    KNIT: "ニット帽",
  } as const;

  export const OTHER = {
    OTHERS: "その他",
  } as const;
}
export type TCombinationOuterDetails =
  typeof COMBINATION_ITEM_DETAILS.OUTER[keyof typeof COMBINATION_ITEM_DETAILS.OUTER];
export type TCombinationTopsDetails =
  typeof COMBINATION_ITEM_DETAILS.TOPS[keyof typeof COMBINATION_ITEM_DETAILS.TOPS];
export type TCombinationBottomsDetails =
  typeof COMBINATION_ITEM_DETAILS.BOTTOMS[keyof typeof COMBINATION_ITEM_DETAILS.BOTTOMS];
export type TCombinationShoesDetails =
  typeof COMBINATION_ITEM_DETAILS.SHOES[keyof typeof COMBINATION_ITEM_DETAILS.SHOES];
export type TCombinationBagDetails =
  typeof COMBINATION_ITEM_DETAILS.BAG[keyof typeof COMBINATION_ITEM_DETAILS.BAG];
export type TCombinationHatDetails =
  typeof COMBINATION_ITEM_DETAILS.HAT[keyof typeof COMBINATION_ITEM_DETAILS.HAT];
export type TCombinationOthersDetails =
  typeof COMBINATION_ITEM_DETAILS.OTHER[keyof typeof COMBINATION_ITEM_DETAILS.OTHER];

export const getItemDetails = (
  itemCategory: TCombinationItemCategory | undefined
):
  | typeof COMBINATION_ITEM_DETAILS.OUTER
  | typeof COMBINATION_ITEM_DETAILS.TOPS
  | typeof COMBINATION_ITEM_DETAILS.BOTTOMS
  | typeof COMBINATION_ITEM_DETAILS.SHOES
  | typeof COMBINATION_ITEM_DETAILS.BAG
  | typeof COMBINATION_ITEM_DETAILS.HAT => {
  switch (itemCategory) {
    case COMBINATION_ITEM_CATEGORY.OUTER:
      return COMBINATION_ITEM_DETAILS.OUTER;
    case COMBINATION_ITEM_CATEGORY.TOPS:
      return COMBINATION_ITEM_DETAILS.TOPS;
    case COMBINATION_ITEM_CATEGORY.BOTTOMS:
      return COMBINATION_ITEM_DETAILS.BOTTOMS;
    case COMBINATION_ITEM_CATEGORY.SHOES:
      return COMBINATION_ITEM_DETAILS.SHOES;
    case COMBINATION_ITEM_CATEGORY.BAG:
      return COMBINATION_ITEM_DETAILS.BAG;
    case COMBINATION_ITEM_CATEGORY.HAT:
      return COMBINATION_ITEM_DETAILS.HAT;
    default:
      throw Error("予期せぬエラーが発生しました");
  }
};
