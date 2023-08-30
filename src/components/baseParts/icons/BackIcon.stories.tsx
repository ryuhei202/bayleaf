import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BackIcon } from "./BackIcon";

export default {
  title: "BaseParts/Icons/BackIcon",
  component: BackIcon,
} as ComponentMeta<typeof BackIcon>;

const Template: ComponentStory<typeof BackIcon> = () => <BackIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="w-fit bg-themeGray text-white">
      <Story />
    </div>
  ),
];
