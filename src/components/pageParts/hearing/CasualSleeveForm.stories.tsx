import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CasualSleeveForm } from "./CasualSleeveForm";

export default {
  title: "Hearing/CasualSleeveForm",
  component: CasualSleeveForm,
} as ComponentMeta<typeof CasualSleeveForm>;

const Template: ComponentStory<typeof CasualSleeveForm> = (args) => (
  <CasualSleeveForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValue: 23,
};
