import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TitledAnswer } from "./TitledAnswer";

export default {
  title: "Hearing/TitledAnswer",
  component: TitledAnswer,
} as ComponentMeta<typeof TitledAnswer>;

const Template: ComponentStory<typeof TitledAnswer> = (args) => (
  <TitledAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  titleText: "与えたい印象",
  choice: "職場",
};
