import {
  COMBINATION_ITEM_CATEGORY,
  TCombinationItemCategory,
} from "./TCombinationItemCategory";

export namespace CombinationItemDetails {
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

  export const getItemDetails = (itemCategory: TCombinationItemCategory) => {
    switch (itemCategory) {
      case COMBINATION_ITEM_CATEGORY.OUTER:
        return CombinationItemDetails.OUTER;
      case COMBINATION_ITEM_CATEGORY.TOPS:
        return CombinationItemDetails.TOPS;
      case COMBINATION_ITEM_CATEGORY.BOTTOMS:
        return CombinationItemDetails.BOTTOMS;
      case COMBINATION_ITEM_CATEGORY.SHOES:
        return CombinationItemDetails.SHOES;
      case COMBINATION_ITEM_CATEGORY.BAG:
        return CombinationItemDetails.BAG;
      case COMBINATION_ITEM_CATEGORY.HAT:
        return CombinationItemDetails.HAT;
      default:
        throw Error("予期せぬエラーが発生しました");
    }
  };
}
export type TCombinationOuterDetails =
  typeof CombinationItemDetails.OUTER[keyof typeof CombinationItemDetails.OUTER];
export type TCombinationTopsDetails =
  typeof CombinationItemDetails.TOPS[keyof typeof CombinationItemDetails.TOPS];
export type TCombinationBottomsDetails =
  typeof CombinationItemDetails.BOTTOMS[keyof typeof CombinationItemDetails.BOTTOMS];
export type TCombinationShoesDetails =
  typeof CombinationItemDetails.SHOES[keyof typeof CombinationItemDetails.SHOES];
export type TCombinationBagDetails =
  typeof CombinationItemDetails.BAG[keyof typeof CombinationItemDetails.BAG];
export type TCombinationHatDetails =
  typeof CombinationItemDetails.HAT[keyof typeof CombinationItemDetails.HAT];
export type TCombinationOthersDetails =
  typeof CombinationItemDetails.OTHER[keyof typeof CombinationItemDetails.OTHER];
export type TCombinationDetails =
  | TCombinationOthersDetails
  | TCombinationOuterDetails
  | TCombinationTopsDetails
  | TCombinationBottomsDetails
  | TCombinationShoesDetails
  | TCombinationBagDetails
  | TCombinationHatDetails;
