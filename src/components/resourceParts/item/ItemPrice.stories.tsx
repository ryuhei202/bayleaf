import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { ItemCard } from "./ItemCard";
export default {
  title: "resourceParts/item/ItemPrice",
  component: ItemCard,
  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div className="m-1">
        <Story />
      </div>
    ),
  ],
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
  price: 12000,
  originPrice: 15000,
  discountRate: 20,
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-2">
      <Story />
    </div>
  ),
];
