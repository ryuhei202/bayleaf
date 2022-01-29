import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { CoworkerIcon } from "./icons/CoworkerIcon";
import { Typography } from "./Typography";

export default {
  title: "BaseParts/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ボタン",
};

export const NodeChild = Template.bind({});
NodeChild.args = {
  children: (
    <>
      <CoworkerIcon className="mb-3" />
      <Typography>職場</Typography>
    </>
  ),
};
