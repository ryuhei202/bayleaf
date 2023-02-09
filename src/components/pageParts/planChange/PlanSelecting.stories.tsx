import { ComponentMeta, ComponentStory } from "@storybook/react";
import { findPlanById } from "../../../models/shared/Plans";
import { PlanSelecting } from "./PlanSelecting";

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
  isCancelCompleted: false,
};

export const PlanSelected = Template.bind({});
PlanSelected.args = {
  memberData: {
    mPlanId: 11,
    nextPaymentDate: "2023/1/14",
    rentalRemainingNum: 1,
  },
  selectedPlan: findPlanById(12),
  isCompleted: false,
  isCancelCompleted: false,
};

export const PlanRequested = Template.bind({});
PlanRequested.args = {
  memberData: {
    mPlanId: 11,
    nextPaymentDate: "2023/1/14",
    rentalRemainingNum: 1,
    requestedPlanId: 12,
  },
  isCancelCompleted: false,
};
