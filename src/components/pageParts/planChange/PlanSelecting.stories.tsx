import { ComponentMeta, ComponentStory } from "@storybook/react";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
import { PlanSelectingForPreMember } from "./PlanSelectingForPreMember";

export default {
  title: "PageParts/PlanChange/PlanSelecting",
  component: PlanSelectingForPreMember,
  onSubmit: {
    action: "onSubmit",
  },
} as ComponentMeta<typeof PlanSelectingForPreMember>;

const Template: ComponentStory<typeof PlanSelectingForPreMember> = (args) => (
  <PlanSelectingForPreMember {...args} />
);

export const Default = Template.bind({});
Default.args = {
  planId: M_PLAN_IDS.LIGHT,
};
