import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PurchaseItemInfo } from "./PurchaseItemInfo";

export default {
  title: "resourceParts/item/PurchaseItemInfo",
  component: PurchaseItemInfo,
} as ComponentMeta<typeof PurchaseItemInfo>;

const Template: ComponentStory<typeof PurchaseItemInfo> = (args) => (
  <PurchaseItemInfo {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  imagePaths : {
    defaultPath : "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
    expandedPath : "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg"
    },
  brand: "leeap original",
  category: "ジャケット",
  color: "ブラック",
  discountRate: 20,
  point: 864,
  discountedPrice: 12000,
  price: 15000
};

