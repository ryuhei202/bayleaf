import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ShortSleeveIcon } from "./ShortSleeveIcon";

export default {
  title: "BaseParts/Legacy/Icons/ShortSleeveIcon",
  component: ShortSleeveIcon,
} as ComponentMeta<typeof ShortSleeveIcon>;

const Template: ComponentStory<typeof ShortSleeveIcon> = () => (
  <ShortSleeveIcon />
);

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="w-fit bg-themeGray text-white">
      <Story />
    </div>
  ),
];
