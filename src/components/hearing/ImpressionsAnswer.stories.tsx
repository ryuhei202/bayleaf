import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImpressionsAnswer } from "./ImpressionsAnswer";

export default {
  title: "Hearing/ImpressionsAnswer",
  component: ImpressionsAnswer,
} as ComponentMeta<typeof ImpressionsAnswer>;

const Template: ComponentStory<typeof ImpressionsAnswer> = (args) => (
  <ImpressionsAnswer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  impressionReference: {
    categoryId: 3,
    choices: [
      { id: 6, name: "優しい" },
      { id: 8, name: "年齢に合った" },
      { id: 9, name: "清潔感のある" },
    ],
    text: null,
  },
  especiallyImpressionReference: {
    categoryId: 4,
    choices: [{ id: 12, name: "優しい" }],
    text: null,
  },
};
