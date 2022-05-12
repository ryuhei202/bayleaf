import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CombinationItemCategorySelection } from "./CombinationItemCategorySelection";
import { CombinationItemDetailSelection } from "./CombinationItemDetailSelection";

export default {
  title: "Consult/Combination/CombinationItemDetailSelection",
  component: CombinationItemDetailSelection,
} as ComponentMeta<typeof CombinationItemDetailSelection>;

const Template: ComponentStory<typeof CombinationItemCategorySelection> = (
  args
) => <CombinationItemDetailSelection {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCurrentFormType: () => {},
  itemCategory: undefined,
  setItemCategory: () => {},
};

Default.decorators = [(Story) => <Story />];
