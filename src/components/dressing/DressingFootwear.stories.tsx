import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DressingFootwear } from "./DressingFootwear";

export default {
  title: "Dressing/DressingFootwear",
  component: DressingFootwear,
} as ComponentMeta<typeof DressingFootwear>;

const Template: ComponentStory<typeof DressingFootwear> = (args) => (
  <DressingFootwear {...args} />
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
  footwear: {
    name: "ネイビーのキャンバススニーカー",
    imagePath: "/images/favorite_shoes/1.jpg",
  },
};
