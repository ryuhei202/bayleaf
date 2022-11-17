import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExpandableImage } from "./ExpandableImage";

export default {
  title: "BaseParts/Legacy/Images/ExpandableImage",
  component: ExpandableImage,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ExpandableImage>;

const Template: ComponentStory<typeof ExpandableImage> = (args) => (
  <ExpandableImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultImageSrc: "https://placehold.jp/ca161c/ffffff/198x300.png",
  ExpandedImageSrc: "https://placehold.jp/3d4070/ffffff/933x1400.png",
};

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <div className="w-16">
        <Story />
      </div>
    </div>
  ),
];
