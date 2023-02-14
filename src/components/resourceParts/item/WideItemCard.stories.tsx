import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ITEM_TEST_IMAGE_URL } from "../../../images/TestImageUrl";
import { WideItemCard } from "./WideItemCard";
export default {
  title: "resourceParts/item/WideItemCard",
  component: WideItemCard,
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
} as ComponentMeta<typeof WideItemCard>;

const Template: ComponentStory<typeof WideItemCard> = (args) => (
  <WideItemCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  imagePaths: {
    defaultPath: ITEM_TEST_IMAGE_URL.largeThumb,
    expandedPath: ITEM_TEST_IMAGE_URL.large,
  },
};

Default.decorators = [
  (WideItemCard) => (
    <div className="bg-clay w-full p-2">
      <WideItemCard>
        <div>
          <p>text</p>
        </div>
      </WideItemCard>
    </div>
  ),
];
