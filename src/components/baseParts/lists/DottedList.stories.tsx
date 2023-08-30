import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DottedList } from "./DottedList";

export default {
  title: "BaseParts/Lists/DottedList",
  component: DottedList,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof DottedList>;

const Template: ComponentStory<typeof DottedList> = (args) => (
  <DottedList {...args} />
);

export const Hearing = Template.bind({});

Hearing.args = {
  listItems: [
    { question: "誰と", answer: "恋人" },
    { question: "利用シーン", answer: "ショッピング、外食" },
    { question: "見せたい印象", answer: "清潔感" },
  ],
};

Hearing.decorators = [
  (Story) => (
    <div className="h-screen w-full bg-clay p-5">
      <Story />
    </div>
  ),
];

export const MemberSize = Template.bind({});

MemberSize.args = {
  listItems: [
    { question: "トップス", answer: "Lサイズ" },
    { question: "ボトムス", answer: "ウエスト:82〜83cm　L1サイズああああ" },
    { question: "ウエスト", answer: "痩せ型でお腹は出ていない" },
    { question: "肩", answer: "やや出てる" },
    { question: "ヒップ", answer: "いかり肩" },
    { question: "胸囲", answer: "がっしり" },
  ],
};
MemberSize.decorators = [
  (Story) => (
    <div className="h-screen w-full bg-clay p-5">
      <Story />
    </div>
  ),
];
