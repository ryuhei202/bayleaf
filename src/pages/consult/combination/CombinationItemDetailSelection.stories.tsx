import { ComponentMeta, ComponentStory } from "@storybook/react";
import { COMBINATION_ITEM_CATEGORY } from "../../../models/consult/TCombinationItemCategory";
import { CombinationItemDetailSelection } from "./CombinationItemDetailSelection";

export default {
  title: "Consult/Combination/CombinationItemDetailSelection",
  component: CombinationItemDetailSelection,
} as ComponentMeta<typeof CombinationItemDetailSelection>;

const Template: ComponentStory<typeof CombinationItemDetailSelection> = (
  args
) => <CombinationItemDetailSelection {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemCategory: COMBINATION_ITEM_CATEGORY.TOPS,
  onSubmit: () => {},
};
