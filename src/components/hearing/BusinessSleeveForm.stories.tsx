import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BusinessSleeveForm } from "./BusinessSleeveForm";

export default {
  title: "Hearing/BusinessSleeveForm",
  component: BusinessSleeveForm,
} as ComponentMeta<typeof BusinessSleeveForm>;

const Template: ComponentStory<typeof BusinessSleeveForm> = (args) => (
  <BusinessSleeveForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValue: 27,
};
