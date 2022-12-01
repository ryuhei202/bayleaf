import { ComponentMeta, ComponentStory } from "@storybook/react";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
import { Cloths } from "./Cloths";

export default {
  title: "PageParts/PlanChange/Cloths",
  component: Cloths,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Cloths>;

const Template: ComponentStory<typeof Cloths> = (args) => <Cloths {...args} />;

export const Light = Template.bind({});
Light.args = {
  planId: M_PLAN_IDS.LIGHT,
};

export const Standard = Template.bind({});
Standard.args = {
  planId: M_PLAN_IDS.SRTANDARD,
};

export const Premium = Template.bind({});
Premium.args = {
  planId: M_PLAN_IDS.PREMIUM,
};
