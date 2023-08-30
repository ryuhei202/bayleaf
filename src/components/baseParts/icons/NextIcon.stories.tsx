import { ComponentMeta, ComponentStory } from "@storybook/react";
import { NextIcon } from "./NextIcon";

export default {
  title: "BaseParts/Icons/NextIcon",
  component: NextIcon,
} as ComponentMeta<typeof NextIcon>;

const Template: ComponentStory<typeof NextIcon> = () => <NextIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="w-fit bg-themeGray text-white">
      <Story />
    </div>
  ),
];
