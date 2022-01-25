import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SleeveForm } from "./SleeveForm";

export default {
  title: "Hearing/SleeveForm",
  component: SleeveForm,
} as ComponentMeta<typeof SleeveForm>;

const Template: ComponentStory<typeof SleeveForm> = (args) => (
  <SleeveForm {...args} />
);

export const NoDefaultValues = Template.bind({});

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  defaultValue: 23,
};
