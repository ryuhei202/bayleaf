import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CombinationItemCategorySelection } from "./CombinationItemCategorySelection";

export default {
  title: "Consult/Combination/CombinationItemCategorySelection",
  component: CombinationItemCategorySelection,
} as ComponentMeta<typeof CombinationItemCategorySelection>;

const Template: ComponentStory<typeof CombinationItemCategorySelection> = (
  args
) => <CombinationItemCategorySelection {...args} />;

export const Default = Template.bind({});
Default.args = {
  setCurrentFormType: () => {},
  itemCategory: "",
  setItemCategory: () => {},
};

Default.decorators = [(Story) => <Story />];
