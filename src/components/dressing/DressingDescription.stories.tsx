import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../images/TestImageUrl";
import { DressingDescription } from "./DressingDescription";

export default {
  title: "Dressing/DressingDescription",
  component: DressingDescription,
} as ComponentMeta<typeof DressingDescription>;

const Template: ComponentStory<typeof DressingDescription> = (args) => (
  <DressingDescription {...args} />
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
  description: "今回のコーデはお花を見に行くことを考えてつくりました🌸あああ",
  comment: {
    text: "お花見楽しんでください！！",
    stylistIcon: "/images/stylist/icon_2.jpeg",
  },
  coordinateItems: [
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
    {
      id: 488072,
      isTops: true,
      cateSmallName: "柄Tシャツ",
      imagePaths: ITEM_TEST_IMAGE_URL,
      color: "オフホワイト",
    },
  ],
};
