import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RankSelectingForm } from "./RankSelectingForm";

export default {
  title: "PageParts/OneShot/RankSelectingForm",
  component: RankSelectingForm,
  argTypes: {
    onSelect: { action: "selected" },
    onSubmit: { action: "submitted" },
  },
} as ComponentMeta<typeof RankSelectingForm>;

const Template: ComponentStory<typeof RankSelectingForm> = (args) => (
  <RankSelectingForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  isSelectableBRank: false,
};
