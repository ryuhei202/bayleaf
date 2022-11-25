import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateItemResponse } from "../../api/coordinates/TCoordinateItemResponse";
import { ITEM_TEST_IMAGE_URL } from "../../images/TestImageUrl";
import { ReviewForm } from "./ReviewFormFetcher";

export default {
  title: "Review/ReviewForm",
  component: ReviewForm,
} as ComponentMeta<typeof ReviewForm>;

const Template: ComponentStory<typeof ReviewForm> = (args) => (
  <ReviewForm {...args} />
);

export const Default = Template.bind({});
const items: TCoordinateItemResponse[] = [...Array(4)].map(() => {
  return {
    id: 111111,
    isTops: true,
    cateSmallName: "シャツ",
    imagePaths: ITEM_TEST_IMAGE_URL,
    color: "白",
  };
});

Default.args = {
  coordinate: {
    id: 10,
    isReviewedOrSkipped: false,
    items,
  },
  reviewOptions: [
    { id: 1, name: "満足した" },
    { id: 2, name: "気になるところがあった" },
    { id: 3, name: "満足できなかった" },
  ],
};
