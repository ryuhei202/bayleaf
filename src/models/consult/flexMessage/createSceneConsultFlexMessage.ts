export type TSceneAnswer = {
  itemImageUrls: string[];
  freetext: string;
};

/**
 * 着こなし相談のシーンFlexメッセージをJSON文字列で返却
 */
export const createSceneConsultFlexMessage = (
  formAnswer: TSceneAnswer
): string => {
  const flexMessage = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents: [
        {
          type: "text",
          text: "■相談内容",
          weight: "bold",
          size: "sm",
          wrap: true,
        },
        {
          type: "text",
          text: "使うシーンに合っているか気になる",
          size: "xl",
          margin: "md",
          wrap: true,
        },
        {
          type: "text",
          text: "■相談コーデ",
          weight: "bold",
          size: "sm",
          margin: "md",
          wrap: true,
        },
        {
          type: "box",
          layout: "horizontal",
          contents: formAnswer.itemImageUrls.map((imageUrl) => {
            return {
              type: "image",
              url: imageUrl,
            };
          }),
          margin: "md",
          alignItems: "center",
        },
        {
          type: "text",
          text: "■使いたいシーンについて",
          margin: "lg",
          weight: "bold",
          size: "sm",
          wrap: true,
        },
        {
          type: "text",
          text: formAnswer.freetext,
          margin: "md",
          size: "xxs",
          wrap: true,
        },
      ],
    },
  };

  return JSON.stringify(flexMessage);
};
