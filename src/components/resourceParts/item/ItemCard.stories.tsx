import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { ItemCard } from "./ItemCard";
export default {
  title: "BaseParts/ItemCard",
  component: ItemCard,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ItemCard>;

const Template: ComponentStory<typeof ItemCard> = (args) => (
  <ItemCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  imagePaths: {
    defaultPath: ITEM_TEST_IMAGE_URL.largeThumb,
    expandedPath: ITEM_TEST_IMAGE_URL.large,
  },
  categoryName: "シャツ",
  colorName: "オレンジ",
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-2">
      <Story />
    </div>
  ),
];
