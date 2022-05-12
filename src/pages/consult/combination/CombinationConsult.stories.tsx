import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { CombinationConsult } from "./CombinationConsult";

export default {
  title: "Consult/Combination/CombinationConsult",
  component: CombinationConsult,
} as ComponentMeta<typeof CombinationConsult>;

const Template: ComponentStory<typeof CombinationConsult> = (args) => (
  <CombinationConsult {...args} />
);

export const Default = Template.bind({});
Default.args = {
  setCurrentFormType: () => {},
};

Default.decorators = [(Story) => <Story />];
