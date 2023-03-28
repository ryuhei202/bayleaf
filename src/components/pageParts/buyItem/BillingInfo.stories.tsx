import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BillingInfo } from "./BillingInfo";

export default {
  title: "ResourceParts/BuyItem/BillingInfo",
  component: BillingInfo,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BillingInfo>;

const Template: ComponentStory<typeof BillingInfo> = (args) => (
  <BillingInfo {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  price: 48500,
  totalSellingPrice: 43500,
  allSelectedDiscountPrice: 4650,
  totalDiscountedPrice: 39000,
  grantedPoint: 4350,
  possesedPoint: 8000,
  selectedPoint: 8000,
};
