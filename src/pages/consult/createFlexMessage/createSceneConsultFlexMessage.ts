import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";

type TSceneAnswer = {
  itemImageUrls: string[];
  freeText: string;
};

/**
 * 着こなし相談のシーンFlexメッセージをJSON文字列で返却
 */
export const createSceneConsultFlexMessage = (
  formAnswer: TSceneAnswer
): string => {
  const flexMessage = {
    type: "flex",
    altText: "[相談内容]使うシーンに合っているか気になる",
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
                url:
                  process.env.REACT_APP_ENV === "production"
                    ? imageUrl
                    : ITEM_TEST_IMAGE_URL.original,
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
            text: formAnswer.freeText,
            margin: "md",
            size: "xxs",
            wrap: true,
          },
        ],
      },
    },
  };

  return JSON.stringify(flexMessage);
};
