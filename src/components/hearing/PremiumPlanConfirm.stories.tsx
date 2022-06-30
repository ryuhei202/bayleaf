import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PremiumPlanConfirm } from "./PremiumPlanConfirm";

export default {
  title: "Hearing/PremiumPlanConfirm",
  component: PremiumPlanConfirm,
} as ComponentMeta<typeof PremiumPlanConfirm>;

const Template: ComponentStory<typeof PremiumPlanConfirm> = (args) => (
  <PremiumPlanConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onClick: () => {},
  onCancel: () => {},
};
