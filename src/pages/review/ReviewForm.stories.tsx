import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateItemResponse } from "../../api/coordinates/TCoordinateItemResponse";
import { ReviewForm } from "./ReviewForm";

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

Default.args = {
  coordinate: {
    id: 10,
    isReviewed: false,
    items,
  },
  reviewOptions: [
    { id: 1, name: "満足した" },
    { id: 2, name: "気になるところがあった" },
    { id: 3, name: "満足できなかった" },
  ],
};

Default.decorators = [(Story) => <Story />];
