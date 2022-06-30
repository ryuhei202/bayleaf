import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BeforeHearingConfirm } from "./BeforeHearingConfirm";

export default {
  title: "Hearing/BeforeHearingForm",
  component: BeforeHearingConfirm,
} as ComponentMeta<typeof BeforeHearingConfirm>;

const Template: ComponentStory<typeof BeforeHearingConfirm> = (args) => (
  <BeforeHearingConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onClick: () => {},
};
