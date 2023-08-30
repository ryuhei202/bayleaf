import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DressingAdvice } from "./DressingAdvice";

export default {
  title: "Dressing/DressingAdvice",
  component: DressingAdvice,
} as ComponentMeta<typeof DressingAdvice>;

const Template: ComponentStory<typeof DressingAdvice> = (args) => (
  <DressingAdvice {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.decorators = [
  (Story) => (
    <div className="w-full bg-slate-200 p-3">
      <Story />
    </div>
  ),
];
DefaultValues.args = {
  advices: [
    {
      description: "ボタンを上まで留める",
      imageFileName: `/images/advice/DSCF0295__tri.jpg`,
    },
    {
      description: "カジュアル感を出しつつ、キレイめ要素を残して",
      imageFileName: null,
    },
    {
      description: "洗練された優しい印象のコーデに",
      imageFileName: null,
    },
  ],
};
