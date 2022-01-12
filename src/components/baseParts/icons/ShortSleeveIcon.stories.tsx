import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShortSleeveIcon } from "./ShortSleeveIcon";

export default {
  title: "BaseParts/Icons/ShortSleeveIcon",
  component: ShortSleeveIcon,
} as ComponentMeta<typeof ShortSleeveIcon>;

const Template: ComponentStory<typeof ShortSleeveIcon> = () => (
  <ShortSleeveIcon />
);

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-midnight">
      <Story />
    </div>
  ),
];
