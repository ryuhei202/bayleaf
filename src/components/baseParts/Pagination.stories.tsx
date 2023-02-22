import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagenation } from "./Pagination";

export default {
  title: "BaseParts/Pagenation",
  component: Pagenation,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Pagenation>;

const Template: ComponentStory<typeof Pagenation> = (args) => (
  <Pagenation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  count: 10,
  currentPage: 1,
  onClick: () => {},
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
