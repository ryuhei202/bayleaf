import { ComponentMeta, ComponentStory } from "@storybook/react";
import { findPlanById, M_PLAN_IDS } from "../../../models/shared/Plans";
import { PlanSelecting } from "./PlanSelecting";
import { PlanSelectingForPreMember } from "./PlanSelectingForPreMember";

export default {
  title: "PageParts/PlanChange/PlanSelecting",
  component: PlanSelecting,
  onSubmit: {
    action: "onSubmit",
  },
} as ComponentMeta<typeof PlanSelecting>;

const Template: ComponentStory<typeof PlanSelecting> = (args) => (
  <PlanSelecting {...args} />
);

export const Default = Template.bind({});
Default.args = {
  memberData: {
    mPlanId: 11,
    nextPaymentDate: "2023/1/14",
    rentalRemainingNum: 1,
  },
};

export const PlanSelecetd = Template.bind({});
PlanSelecetd.args = {
  memberData: {
    mPlanId: 11,
    nextPaymentDate: "2023/1/14",
    rentalRemainingNum: 1,
  },
  selectedPlan: findPlanById(12),
  isCompleted: false,
};

export const PlanRequested = Template.bind({});
PlanRequested.args = {
  memberData: {
    mPlanId: 11,
    nextPaymentDate: "2023/1/14",
    rentalRemainingNum: 1,
    requestedPlanId: 12,
  },
};
