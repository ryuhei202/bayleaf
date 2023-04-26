import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PointHistoryListItem } from "./PointHistoryListItem";

export default {
  title: "PageParts/pointHistory/PointHistoryListItem",
  component: PointHistoryListItem,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof PointHistoryListItem>;
const Template: ComponentStory<typeof PointHistoryListItem> = (args) => (
  <PointHistoryListItem {...args} />
);
export const DefaultValues = Template.bind({});
DefaultValues.args = {
  point: 30,
  pointCreatedAt: "2022年5月24日",
};
