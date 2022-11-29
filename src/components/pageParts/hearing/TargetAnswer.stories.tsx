import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TargetAnswer } from "./TargetAnswer";

export default {
  title: "Hearing/TargetAnswer",
  component: TargetAnswer,
} as ComponentMeta<typeof TargetAnswer>;

const Template: ComponentStory<typeof TargetAnswer> = (args) => (
  <TargetAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stylingReference: {
    categoryId: 1,
    choices: [{ id: 1, name: "職場" }],
    text: "シャツの着用が必須",
  },
};
