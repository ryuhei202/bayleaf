import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SleeveAnswer } from "./SleeveAnswer";

export default {
  title: "Hearing/SleeveAnswer",
  component: SleeveAnswer,
} as ComponentMeta<typeof SleeveAnswer>;

const Template: ComponentStory<typeof SleeveAnswer> = (args) => (
  <SleeveAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stylingReference: {
    categoryId: 6,
    choices: [{ id: 23, name: "長袖3 / 半袖0" }],
    text: null,
  },
};
