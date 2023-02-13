import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BuyItemSelect } from "./BuyItemSelect";

export default {
  title: "pageParts/buyItem/select/BuyItemSelect",
  component: BuyItemSelect,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BuyItemSelect>;

const Template: ComponentStory<typeof BuyItemSelect> = (args) => (
  <BuyItemSelect {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  selectedChartItems: [
    {
      id: 1,
      isPurchased: 2,
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
      point: 864,
      locationId: 1,
      discountRate: 20,
    },
  ],
  chartItemsData: [
    {
      id: 1,
      isPurchased: 2,
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
      point: 864,
      locationId: 1,
      discountRate: 20,
    },
    {
      id: 2,
      isPurchased: 2,
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
      point: 864,
      locationId: 1,
      discountRate: 20,
    },
    {
      id: 3,
      isPurchased: 2,
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
      point: 864,
      locationId: 1,
      discountRate: 80,
    },
  ],
};
