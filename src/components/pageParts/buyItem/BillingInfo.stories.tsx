import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BillingInfo } from "./BillingInfo";

export default {
  title: "resourceParts/buyItem/BillingInfo",
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
  price: 43500,
  discountedPrice: 48500,
  grantedPoint: 4350,
  possesedPoint: 8000,
  selectedPoint: 600,
};
