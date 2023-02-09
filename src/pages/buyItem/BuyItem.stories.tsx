import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BuyItem } from "./BuyItem";

export default {
  title: "pageParts/buyItem/BuyItem",
  component: BuyItem,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof BuyItem>;

const Template: ComponentStory<typeof BuyItem> = (args) => {
  return <BuyItem />;
};

export const DefaultValues = Template.bind({});
DefaultValues.args = {};
