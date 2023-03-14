import { ComponentMeta, ComponentStory } from "@storybook/react";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
import { PlanSelectingForUnsuspend } from "./PlanSelectingForUnsuspend";

export default {
  title: "PageParts/Unsuspend/PlanSelectingForUnsuspend",
  component: PlanSelectingForUnsuspend,
  onSubmit: {
    action: "onSubmit",
  },
} as ComponentMeta<typeof PlanSelectingForUnsuspend>;

const Template: ComponentStory<typeof PlanSelectingForUnsuspend> = (args) => (
  <PlanSelectingForUnsuspend {...args} />
);

export const Default = Template.bind({});
Default.args = {
  planId: M_PLAN_IDS.LIGHT,
  isLoading: false,
  isCompleted: false,
};
