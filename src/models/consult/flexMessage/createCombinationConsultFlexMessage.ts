type TCombinationAnswer = {
  itemImageUrls: string[];
  personalItem?: {
    category: string;
    color: string;
    additionalText?: string;
  };
};

/**
 * 着こなし相談の私物FlexメッセージをJSON文字列で返却
 */
export const createCombinationConsultFlexMessage = (
  formAnswer: TCombinationAnswer
): string => {
  const contents = [
    {
      type: "text",
      text: "■相談内容",
      weight: "bold",
      size: "sm",
      wrap: true,
    },
    {
      type: "text",
      text: "靴やアウターなど私物との組み合わせが気になる",
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
  ];

  if (formAnswer.personalItem !== undefined) {
    contents.push({
      type: "text",
      text: "■使いたいアイテム",
      margin: "lg",
      weight: "bold",
      size: "sm",
      wrap: true,
    });
    contents.push({
      type: "text",
      text: `${formAnswer.personalItem.category}／${formAnswer.personalItem.color}`,
      margin: "md",
      size: "xxs",
      wrap: true,
    });

    if (formAnswer.personalItem.additionalText !== undefined) {
      contents.push({
        type: "text",
        text: "■使いたいアイテムの詳細情報",
        margin: "lg",
        weight: "bold",
        size: "sm",
        wrap: true,
      });
      contents.push({
        type: "text",
        text: `${formAnswer.personalItem.additionalText}`,
        margin: "md",
        size: "xxs",
        wrap: true,
      });
    }
  }

  let flexMessage = {
    type: "bubble",
    body: {
      type: "box",
      layout: "vertical",
      contents,
    },
  };

  return JSON.stringify(flexMessage);
};
