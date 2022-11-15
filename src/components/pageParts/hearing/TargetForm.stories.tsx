import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TargetForm } from "./TargetForm";

export default {
  title: "Hearing/TargetForm",
  component: TargetForm,
} as ComponentMeta<typeof TargetForm>;

const Template: ComponentStory<typeof TargetForm> = (args) => (
  <TargetForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValue: 1,
};
