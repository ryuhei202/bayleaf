import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArrowIcon } from "./ArrowIcon";

export default {
  title: "BaseParts/Legacy/Icons/ArrowIcon",
  component: ArrowIcon,
} as ComponentMeta<typeof ArrowIcon>;

const Template: ComponentStory<typeof ArrowIcon> = () => <ArrowIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-themeGray w-fit">
      <Story />
    </div>
  ),
];
