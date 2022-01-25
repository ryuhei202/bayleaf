import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MultipleImpressionsForm } from "./MultipleImpressionsForm";

export default {
  title: "Hearing/MultipleImpressionsForm",
  component: MultipleImpressionsForm,
} as ComponentMeta<typeof MultipleImpressionsForm>;

const Template: ComponentStory<typeof MultipleImpressionsForm> = (args) => (
  <MultipleImpressionsForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValues: [6, 8, 9],
};
