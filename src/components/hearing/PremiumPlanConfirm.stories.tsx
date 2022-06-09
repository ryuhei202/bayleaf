import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BeforeHearingConfirm } from "./BeforeHearingConfirm";
import { PremiumPlanConfirm } from "./PremiumPlanConfirm";

export default {
  title: "Hearing/PremiumPlanConfirm",
  component: PremiumPlanConfirm,
} as ComponentMeta<typeof PremiumPlanConfirm>;

const Template: ComponentStory<typeof BeforeHearingConfirm> = (args) => (
  <PremiumPlanConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onClick: () => {},
};
