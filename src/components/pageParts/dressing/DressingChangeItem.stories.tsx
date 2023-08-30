import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DressingChangeItem } from "./DressingChangeItem";

export default {
  title: "Dressing/DressingChangeItem",
  component: DressingChangeItem,
} as ComponentMeta<typeof DressingChangeItem>;

const Template: ComponentStory<typeof DressingChangeItem> = (args) => (
  <DressingChangeItem {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.decorators = [
  (Story) => (
    <div className="w-full bg-slate-200 p-3">
      <Story />
    </div>
  ),
];
DefaultValues.args = {
  changeItems: [
    {
      id: 488071,
      isTops: true,
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
    },
    {
      id: 488071,
      isTops: true,
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
    },
  ],
};
