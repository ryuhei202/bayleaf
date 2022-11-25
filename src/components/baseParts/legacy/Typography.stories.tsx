import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "./Typography";

export default {
  title: "BaseParts/Legacy/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const StringChild = Template.bind({});
StringChild.args = {
  children: "サンプルテキスト",
};

export const NodeChild = Template.bind({});
NodeChild.args = {
  children: (
    <>
      サンプル
      <br />
      テキスト
    </>
  ),
};
