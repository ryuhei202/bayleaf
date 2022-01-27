export namespace ReferenceOptions {
  type TOption<K extends string> = {
    [key in K]: { id: number; name: string };
  };

  export const TARGET: TOption<
    "COWORKER" | "FAMILY" | "PARTNER" | "FRIEND" | "NONE"
  > = {
    COWORKER: { id: 1, name: "職場" },
    FAMILY: { id: 2, name: "家族" },
    PARTNER: { id: 3, name: "異性(恋人)" },
    FRIEND: { id: 4, name: "友人" },
    NONE: { id: 5, name: "特になし" },
  };

  export const MULTIPLE_IMPRESSIONS: TOption<
    "KIND" | "YOUNG" | "AGE_FIT" | "CLEAN" | "CALM" | "ACTIVE"
  > = {
    KIND: { id: 6, name: "優しい" },
    YOUNG: { id: 7, name: "若々しい" },
    AGE_FIT: { id: 8, name: "年齢に合った" },
    CLEAN: { id: 9, name: "清潔感のある" },
    CALM: { id: 10, name: "落ち着いた" },
    ACTIVE: { id: 11, name: "活発な(アクティブな)" },
  };

  export const PRIMARY_IMPRESSIONS: TOption<
    "KIND" | "YOUNG" | "AGE_FIT" | "CLEAN" | "CALM" | "ACTIVE"
  > = {
    KIND: { id: 12, name: "優しい" },
    YOUNG: { id: 13, name: "若々しい" },
    AGE_FIT: { id: 14, name: "年齢に合った" },
    CLEAN: { id: 15, name: "清潔感のある" },
    CALM: { id: 16, name: "落ち着いた" },
    ACTIVE: { id: 17, name: "活発な(アクティブな)" },
  };

  export const CASUAL_SLEEVE: TOption<
    "LONG_3_SHORT_0" | "LONG_2_SHORT_1" | "LONG_1_SHORT_2" | "LONG_0_SHORT_3"
  > = {
    LONG_3_SHORT_0: { id: 23, name: "長袖3 / 半袖0" },
    LONG_2_SHORT_1: { id: 24, name: "長袖2 / 半袖1" },
    LONG_1_SHORT_2: { id: 25, name: "長袖1 / 半袖2" },
    LONG_0_SHORT_3: { id: 26, name: "長袖0 / 半袖3" },
  };

  export const BUSINESS_SLEEVE: TOption<
    "LONG_2_SHORT_0" | "LONG_1_SHORT_1" | "LONG_0_SHORT_2"
  > = {
    LONG_2_SHORT_0: { id: 27, name: "長袖2 / 半袖0" },
    LONG_1_SHORT_1: { id: 28, name: "長袖1 / 半袖1" },
    LONG_0_SHORT_2: { id: 29, name: "長袖0 / 半袖2" },
  };

  export const findById = (id: number) => {
    return [
      TARGET,
      MULTIPLE_IMPRESSIONS,
      PRIMARY_IMPRESSIONS,
      CASUAL_SLEEVE,
      BUSINESS_SLEEVE,
    ]
      .map((options) =>
        Object.values(options).find((option) => option.id === id)
      )
      .filter((option) => option !== undefined)[0];
  };
}
