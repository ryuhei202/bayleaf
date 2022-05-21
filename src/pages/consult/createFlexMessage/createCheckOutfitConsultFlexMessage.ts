import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";

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
    altText: "[相談内容]とにかく着こなしを確認してほしい",
    sender: true,
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
                url:
                  process.env.REACT_APP_ENV === "production"
                    ? imageUrl
                    : ITEM_TEST_IMAGE_URL.original,
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
