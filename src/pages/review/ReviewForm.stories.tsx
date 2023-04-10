import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReviewForm } from "./ReviewForm";

export default {
  title: "Review/ReviewForm",
  component: ReviewForm,
} as ComponentMeta<typeof ReviewForm>;

const Template: ComponentStory<typeof ReviewForm> = (args) => (
  <ReviewForm {...args} />
);

export const Default = Template.bind({});
const items = [...Array(4)].map(() => {
  return {
    id: 111111,
    isPurchased: true,
    isForSale: true,
    brandName: "leeap original",
    imagePaths: {
      original:
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
      large:
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      largeThumb:
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      thumb:
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
    },
    categoryName: "ジャケット",
    colorName: "ブラック",
    price: 15000,
    discountedPrice: 12000,
    purchasePoint: 864,
    locationId: 1,
    discountRate: 20,
    rank: "A",
    isTops: true,
  };
});

Default.args = {
  items: items,
  reviewOptions: [
    { id: 1, name: "満足した" },
    { id: 2, name: "気になるところがあった" },
    { id: 3, name: "満足できなかった" },
  ],
};
