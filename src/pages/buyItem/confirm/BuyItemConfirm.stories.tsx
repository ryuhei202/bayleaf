import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BuyItemConfirm } from "./BuyItemConfirm";

export default {
  title: "PageParts/BuyItem/Confirm/BuyItemConfirm",
  component: BuyItemConfirm,
} as ComponentMeta<typeof BuyItemConfirm>;

const Template: ComponentStory<typeof BuyItemConfirm> = (args) => (
  <BuyItemConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  selectedItems: [
    {
      id: 1,
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
    },
  ],
  totalPrice: 42900,
  totalDiscountedPrice: 40000,
  totalGrantedPoint: 4350,
  possesedPoint: 8000,
  selectedPoint: 600,
};

export const AllSelected = Template.bind({});
AllSelected.args = {
  selectedItems: [
    {
      id: 1,
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
    },
  ],
  totalPrice: 42900,
  totalDiscountedPrice: 40000,
  totalGrantedPoint: 4350,
  possesedPoint: 8000,
  selectedPoint: 600,
};
