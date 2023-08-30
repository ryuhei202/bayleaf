import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pagination } from "./Pagination";

export default {
  title: "BaseParts/Pagination",
  component: Pagination,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = Template.bind({});
Default.args = {
  maxPage: 10,
  currentPage: 1,
  onClickPagination: () => {},
};

Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
