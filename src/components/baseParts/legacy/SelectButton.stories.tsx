import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectButton } from "./SelectButton";

export default {
  title: "BaseParts/Legacy/SelectButton",
  component: SelectButton,
} as ComponentMeta<typeof SelectButton>;

const Template: ComponentStory<typeof SelectButton> = (args) => (
  <SelectButton {...args} />
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
