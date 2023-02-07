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
  selectedChartItemIds: [1, 2],
  chartItemsData: [
    {
      id: 1,
      itemStatus: 1,
      brandName: "leeap original",
      imagePaths: [
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      ],
      categoryName: "ジャケット",
      colorName: "ブラック",
      referencePriceTaxIn: 15000,
      priceTaxIn: 12000,
      point: 864,
      locationId: 1,
      discountRate: 20,
    },
    {
      id: 2,
      itemStatus: 1,
      brandName: "leeap original",
      imagePaths: [
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      ],
      categoryName: "ジャケット",
      colorName: "ブラック",
      referencePriceTaxIn: 15000,
      priceTaxIn: 12000,
      point: 864,
      locationId: 1,
      discountRate: 20,
    },
    {
      id: 3,
      itemStatus: 1,
      brandName: "leeap original",
      imagePaths: [
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      ],
      categoryName: "ジャケット",
      colorName: "ブラック",
      referencePriceTaxIn: 15000,
      priceTaxIn: 12000,
      point: 864,
      locationId: 1,
      discountRate: 80,
    },
  ],
};
