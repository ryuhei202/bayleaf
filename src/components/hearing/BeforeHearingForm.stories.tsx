import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BeforeHearingForm } from "./BeforeHearingForm";

export default {
  title: "Hearing/BeforeHearingForm",
  component: BeforeHearingForm,
} as ComponentMeta<typeof BeforeHearingForm>;

const Template: ComponentStory<typeof BeforeHearingForm> = (args) => (
  <BeforeHearingForm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onClick: () => {},
};
