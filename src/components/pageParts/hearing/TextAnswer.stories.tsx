import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextAnswer } from "./TextAnswer";

export default {
  title: "Hearing/TextAnswer",
  component: TextAnswer,
} as ComponentMeta<typeof TextAnswer>;

const Template: ComponentStory<typeof TextAnswer> = (args) => (
  <TextAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  stylingReference: {
    categoryId: 8,
    choices: [],
    text: "手首は細いので、かなり補足調整できるバンドにしている",
  },
  titleText: "その他",
};
