import { ComponentMeta, ComponentStory } from "@storybook/react";
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
  onChangeCurrentFormType: () => {},
};

Default.decorators = [(Story) => <Story />];
