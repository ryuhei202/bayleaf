import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { TDesignAnswer } from "../../../models/consult/TDesignAnswer";

/**
 * 着こなし相談の色・柄FlexメッセージをJSON文字列で返却
 */
export const createDesignConsultFlexMessage = (
  formAnswers: TDesignAnswer[]
): string => {
  const flexMessage = {
    type: "flex",
    altText: "[相談内容]色や柄が気になる",
    sender: true,
    contents: {
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
                text: "色や柄が気になる",
                size: "xl",
                margin: "md",
                wrap: true,
              },
              {
                type: "text",
                text: "■色や柄が合ってないと感じるアイテム",
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
                        url:
                          process.env.REACT_APP_ENV === "production"
                            ? answer.item.imagePaths.original
                            : ITEM_TEST_IMAGE_URL.original,
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
                        text: answer.freeText,
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
    },
  };

  return JSON.stringify(flexMessage);
};
