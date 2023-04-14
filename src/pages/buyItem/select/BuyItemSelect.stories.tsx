import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BuyItemSelect } from "./BuyItemSelect";

export default {
  title: "PageParts/BuyItem/Select/BuyItemSelect",
  component: BuyItemSelect,
} as ComponentMeta<typeof BuyItemSelect>;

const Template: ComponentStory<typeof BuyItemSelect> = (args) => (
  <BuyItemSelect {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  totalSellingPrice: 12000,
  chartItems: [
    {
      id: 1,
      isSelected: false,
      itemInfo: {
        id: 111111,
        isPurchased: false,
        isForSale: true,
        brandName: "leeap original",
        imagePaths: {
          original:
            "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
          large:
            "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
          largeThumb:
            "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
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
    },
    {
      id: 2,
      isSelected: false,
      itemInfo: {
        id: 111111,
        isPurchased: false,
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
    },
    {
      id: 3,
      isSelected: false,
      itemInfo: {
        id: 111111,
        isPurchased: false,
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
        discountRate: 80,
        rank: "A",
        isTops: true,
      },
    },
  ],
};

export const Purchased = Template.bind({});
Purchased.args = {
  totalSellingPrice: 12000,
  chartItems: [
    {
      id: 1,
      isSelected: false,
      itemInfo: {
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
      },
    },
    {
      id: 2,
      isSelected: false,
      itemInfo: {
        id: 111111,
        isPurchased: false,
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
    },
    {
      id: 3,
      isSelected: false,
      itemInfo: {
        id: 111111,
        isPurchased: false,
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
        discountRate: 80,
        rank: "A",
        isTops: true,
      },
    },
  ],
};
