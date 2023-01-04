import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LIGHT_PLAN } from "../../../models/shared/Plans";
import { PlanChangePanel } from "./PlanChangePanel";

export default {
  title: "PageParts/PlanChange/PlanChangePanel",
  component: PlanChangePanel,
  onSubmit: {
    action: "onSubmit",
  },
} as ComponentMeta<typeof PlanChangePanel>;

const Template: ComponentStory<typeof PlanChangePanel> = (args) => (
  <PlanChangePanel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  plan: LIGHT_PLAN,
  text: "現在ご契約のプランです",
  children: <>テスト</>,
};
