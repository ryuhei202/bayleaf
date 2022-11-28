import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  LIGHT_PLAN,
  PREMIUM_PLAN,
  STANDARD_PLAN,
} from "../../../models/shared/Plans";
import { PlanChangeCard } from "./PlanChangeCard";

export default {
  title: "PageParts/PlanChange/PlanChangeCard",
  component: PlanChangeCard,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof PlanChangeCard>;

const Template: ComponentStory<typeof PlanChangeCard> = (args) => (
  <PlanChangeCard {...args} />
);

export const Light = Template.bind({});
Light.args = {
  plan: LIGHT_PLAN,
  disabled: false,
};

export const Standard = Template.bind({});
Standard.args = {
  plan: STANDARD_PLAN,
  disabled: false,
};

export const Premium = Template.bind({});
Premium.args = {
  plan: PREMIUM_PLAN,
  disabled: false,
};
