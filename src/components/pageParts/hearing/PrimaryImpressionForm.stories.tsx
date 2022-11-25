import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PrimaryImpressionForm } from "./PrimaryImpressionForm";

export default {
  title: "Hearing/PrimaryImpressionForm",
  component: PrimaryImpressionForm,
} as ComponentMeta<typeof PrimaryImpressionForm>;

const Template: ComponentStory<typeof PrimaryImpressionForm> = (args) => (
  <PrimaryImpressionForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: [6, 8, 9],
};
