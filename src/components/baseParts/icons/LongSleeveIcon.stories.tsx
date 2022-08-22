import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LongSleeveIcon } from "./LongSleeveIcon";

export default {
  title: "BaseParts/Icons/LongSleeveIcon",
  component: LongSleeveIcon,
} as ComponentMeta<typeof LongSleeveIcon>;

const Template: ComponentStory<typeof LongSleeveIcon> = () => (
  <LongSleeveIcon />
);

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-themeGray w-fit">
      <Story />
    </div>
  ),
];
