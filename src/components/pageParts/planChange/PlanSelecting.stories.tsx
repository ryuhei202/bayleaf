import { ComponentMeta, ComponentStory } from "@storybook/react";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
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
  memberId: 1111111,
  planId: M_PLAN_IDS.LIGHT,
};
