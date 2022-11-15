import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { DressingChangeItem } from "./DressingChangeItem";

export default {
  title: "Dressing/DressingChangeItem",
  component: DressingChangeItem,
} as ComponentMeta<typeof DressingChangeItem>;

const Template: ComponentStory<typeof DressingChangeItem> = (args) => (
  <DressingChangeItem {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
DefaultValues.args = {
  changeItems: [
    {
      id: 488070,
      isTops: true,
      cateSmallName: "柄Tシャツ",
      imagePaths: ITEM_TEST_IMAGE_URL,
      color: "オフホワイト",
    },
    {
      id: 488071,
      isTops: true,
      cateSmallName: "柄Tシャツ",
      imagePaths: ITEM_TEST_IMAGE_URL,
      color: "オフホワイト",
    },
  ],
};
