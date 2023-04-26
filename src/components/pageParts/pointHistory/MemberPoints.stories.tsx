import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemberPoints } from "./MemberPoints";

export default {
  title: "PageParts/pointHistory/MemberPoints",
  component: MemberPoints,
  decorators: [
    (Story) => (
      <div className="m-1 p-2 bg-clay">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MemberPoints>;
const Template: ComponentStory<typeof MemberPoints> = (args) => (
  <MemberPoints {...args} />
);
export const DefaultValues = Template.bind({});
DefaultValues.args = {
  currentPage: 2,
  maxPage: 10,
  pointData: [
    {
      id: 1,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 2,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 3,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 4,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 5,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 6,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 7,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 8,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 9,
      createdAt: "2022年5月24日",
      point: 1500,
    },
    {
      id: 10,
      createdAt: "2022年5月24日",
      point: 1500,
    },
  ],
  totalPoint: 15000,
};
