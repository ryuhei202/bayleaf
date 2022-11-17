import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CompleteButton } from "./CompleteButton";

export default {
  title: "BaseParts/Legacy/CompleteButton",
  component: CompleteButton,
} as ComponentMeta<typeof CompleteButton>;

const Template: ComponentStory<typeof CompleteButton> = (args) => (
  <CompleteButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "完了",
};

export const WithoutCancel = Template.bind({});
WithoutCancel.args = {
  onClickBack: undefined,
  children: "完了",
};
