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
  // imagePaths: {
  //   defaultPath:
  //     "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
  //   expandedPath:
  //     "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
  // },
  // brand: "leeap original",
  // category: "ジャケット",
  // color: "ブラック",
  // discountRate: 20,
  // point: 864,
  // discountedPrice: 12000,
  // price: 15000,
};
