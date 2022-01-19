import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from "./IconButton";
import { ArrowIcon } from "./icons/ArrowIcon";

export default {
  title: "BaseParts/IconButton",
  component: IconButton,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <ArrowIcon />,
};
