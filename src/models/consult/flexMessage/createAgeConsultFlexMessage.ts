import { TConsultingItem } from "../TConsultingItem";

type TAgeAnswer = {
  item: TConsultingItem;
  ageOption: "若く感じた" | "地味に感じた";
};

/**
 * 着こなし相談の年齢FlexメッセージをJSON文字列で返却
 */
export const createAgeConsultFlexMessage = (
  formAnswers: TAgeAnswer[]
): string => {
  let flexMessage = {
    type: "carousel",
    contents: formAnswers.map((answer) => {
      return {
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
              text: "年齢に合っているか気になる",
              size: "xl",
              margin: "md",
              wrap: true,
            },
            {
              type: "text",
              text: "■年齢に合っているか気になるアイテム",
              margin: "lg",
              weight: "bold",
              size: "sm",
              wrap: true,
            },
            {
              type: "box",
              layout: "horizontal",
              contents: [
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "image",
                      url: answer.item.imagePaths.original,
                      margin: "none",
                    },
                    {
                      type: "text",
                      text: `${answer.item.cateSmallName}／${answer.item.color}`,
                      size: "xxs",
                      wrap: true,
                      margin: "md",
                      weight: "bold",
                    },
                  ],
                  alignItems: "center",
                },
                {
                  type: "box",
                  layout: "vertical",
                  contents: [
                    {
                      type: "text",
                      text: answer.ageOption,
                      size: "xxs",
                      wrap: true,
                    },
                  ],
                  margin: "none",
                },
              ],
              margin: "md",
              alignItems: "center",
            },
          ],
        },
      };
    }),
  };

  return JSON.stringify(flexMessage);
};
