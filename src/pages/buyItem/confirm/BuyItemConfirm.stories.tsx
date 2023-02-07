import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BuyItemConfirm } from "./BuyItemConfirm";

export default {
  title: "pageParts/buyItem/confirm/BuyItemConfirm",
  component: BuyItemConfirm,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BuyItemConfirm>;

const Template: ComponentStory<typeof BuyItemConfirm> = (args) => (
  <BuyItemConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  selectedItems: [
    {
      imagePaths: {
        defaultPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        expandedPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      brand: "leeap original",
      category: "ジャケット",
      color: "ブラック",
      discountRate: 20,
      point: 864,
      discountedPrice: 12000,
      price: 15000,
    },
    {
      imagePaths: {
        defaultPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        expandedPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      brand: "leeap original",
      category: "ジャケット",
      color: "ブラック",
      discountRate: 20,
      point: 864,
      discountedPrice: 12000,
      price: 15000,
    },
    {
      imagePaths: {
        defaultPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        expandedPath:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      brand: "leeap original",
      category: "ジャケット",
      color: "ブラック",
      discountRate: 20,
      point: 864,
      discountedPrice: 12000,
      price: 15000,
    },
  ],
  totalPrice: 42900,
  totalDiscountedPrice: 40000,
  totalGrantedPoint: 4350,
  possesedPoint: 8000,
  selectedPoint: 600,
};
