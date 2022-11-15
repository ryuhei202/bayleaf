import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCategorizedForm } from "../../../api/hearings/TCategorizedForm";
import { TForm } from "../../../api/hearings/TForm";
import { DressingHearing } from "./DressingHearing";

export default {
  title: "Dressing/DressingHearing",
  component: DressingHearing,
} as ComponentMeta<typeof DressingHearing>;

const Template: ComponentStory<typeof DressingHearing> = (args) => (
  <DressingHearing {...args} />
);

export const Default = Template.bind({});

const hearings = [
  {
    categoryId: 1,
    categoryName: "使いたいシーン",
    forms: [
      {
        title: "借りたコーデをどちらの予定で使いますか？",
        options: [
          {
            name: "日常の予定",
            text: null,
          },
        ],
      },
      {
        title: "どちらの場所で仕事をする時間が長いですか？",
        options: [
          {
            name: "自宅が長い",
            text: null,
          },
        ],
      },
    ],
  },
  {
    categoryId: 1,
    categoryName: "意識する相手",
    forms: [
      {
        title: "普段のお仕事先で会う人を教えてください(オンライン含む)",
        options: [
          {
            name: "同僚(上司、部下)",
            text: null,
          },
          {
            name: "お客様、取引先",
            text: null,
          },
        ],
      },
    ],
  },
];
Default.args = {
  hearings,
};
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
