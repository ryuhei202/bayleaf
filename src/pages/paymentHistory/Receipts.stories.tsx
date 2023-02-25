import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Receipts } from "./Receipt";

export default {
  title: "pageParts/Receipts",
  component: Receipts,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Receipts>;

const Template: ComponentStory<typeof Receipts> = (args) => <Receipts />;

export const DefaultValues = Template.bind({});
DefaultValues.args = {};
