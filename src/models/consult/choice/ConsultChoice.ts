export const ConsultChoice = {
  SIZE: "サイズ感が気になる",
  DESIGN: "色味や柄が気になる",
  AGE: "年齢に合っているか気になる",
  SCENE: "使うシーンに合っているか気になる",
  CONBINATION: "靴やアウターなど私物との組み合わせが気になる",
  CHECKOUTFIT: "とにかく着こなしをチェックしてほしい",
} as const;

export type ConsultChoiceType =
  typeof ConsultChoice[keyof typeof ConsultChoice];
