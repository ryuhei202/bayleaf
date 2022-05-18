type TCheckOutfitAnswer = {
  itemImageUrls: string[];
};

/**
 * 着こなし相談のFlexメッセージをJSON文字列で返却
 */
export const createCheckOutfitConsultFlexMessage = (
  formAnswer: TCheckOutfitAnswer
): string => {
  const flexMessage = {
    type: "flex",
    altText: "とにかく着こなしを確認してほしい",
    contents: {
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
            text: "とにかく着こなしを確認してほしい",
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
        ],
      },
    },
  };

  return JSON.stringify(flexMessage);
};
