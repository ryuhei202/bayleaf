import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateItemResponse } from "../../api/coordinates/TCoordinateItemResponse";
import { TCoordinateResponse } from "../../api/coordinates/TCoordinateResponse";
import { TReviewOptionResponse } from "../../api/reviews/TReviewOptionResponse";
import { ReviewContainer } from "./ReviewContainer";

export default {
  title: "Review/ReviewContainer",
  component: ReviewContainer,
} as ComponentMeta<typeof ReviewContainer>;

const Template: ComponentStory<typeof ReviewContainer> = (args) => (
  <ReviewContainer {...args} />
);

export const Default = Template.bind({});
const items: TCoordinateItemResponse[] = [...Array(4)].map(() => {
  return {
    cateSmallName: "シャツ",
    imagePaths: {
      thumb:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      original:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      largeThumb:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      large:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_IMG_3977.JPG",
    },
    color: "白",
  };
});

const reviewOptionResponses: TReviewOptionResponse[] = [
  { id: 1, name: "満足した" },
  { id: 2, name: "気になるところがあった" },
  { id: 3, name: "満足できなかった" },
];

const reviewReasonOptionResponses: TReviewOptionResponse[] = [
  { id: 1, name: "コーデの色バランス" },
  { id: 2, name: "コーデの組み合わせ" },
  { id: 3, name: "コーデのサイズ感" },
  { id: 4, name: "コーデの色バランス" },
  { id: 5, name: "コーデの組み合わせ" },
  { id: 6, name: "コーデのサイズ感" },
];

const coordinateResponses: TCoordinateResponse[] = [
  {
    id: 10,
    isReviewed: false,
    items,
  },
  {
    id: 11,
    isReviewed: false,
    items,
  },
];

Default.args = {
  reviewOptionResponses,
  reviewReasonOptionResponses,
  coordinateResponses,
};

Default.decorators = [(Story) => <Story />];
