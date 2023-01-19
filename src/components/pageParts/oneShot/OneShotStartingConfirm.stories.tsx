import { ComponentMeta, ComponentStory } from "@storybook/react";
import { THearingAnswer } from "../../../models/hearing/THearingAnswer";
import { OneShotStartingConfirm } from "./OneShotStartingConfirm";

export default {
  title: "PageParts/OneShot/OneShotStartingConfirm",
  component: OneShotStartingConfirm,
  argTypes: {
    handleSubmitComplete: { action: "submit" },
    handleCancelForm: { action: "cancel" },
    handleClickReset: { action: "reset" },
  },
} as ComponentMeta<typeof OneShotStartingConfirm>;

const Template: ComponentStory<typeof OneShotStartingConfirm> = (args) => (
  <OneShotStartingConfirm {...args} />
);

export const Default = Template.bind({});
const confirmAnswers: THearingAnswer[] = [
  {
    answer: [
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
            title: "どちらをメインに使用しますか？",
            options: [
              {
                name: "プライベートメイン",
                text: null,
              },
            ],
          },
          {
            title: "コーデをどんなところに着ていく予定ですか？",
            options: [
              {
                name: "ショッピング",
                text: null,
              },
              {
                name: "自宅の近所",
                text: null,
              },
            ],
          },
          {
            title: "その中で一番重視したい予定はどれですか？",
            options: [
              {
                name: "ショッピング",
                text: null,
              },
            ],
          },
        ],
      },
      {
        categoryId: 2,
        categoryName: "意識する相手",
        forms: [
          {
            title: "プライベートで会う予定の人を教えてください",
            options: [
              {
                name: "恋人",
                text: null,
              },
              {
                name: "友人(同性)",
                text: null,
              },
              {
                name: "その他",
                text: "おじいさん",
              },
            ],
          },
          {
            title: "会う予定の人の中で一番洋服を意識したい人を選んでください",
            options: [
              {
                name: "恋人",
                text: null,
              },
            ],
          },
        ],
      },
    ],
  },
];
Default.args = {
  confirmAnswers,
  deliveryDate: "2023-1-19",
  isPostLoading: false,
};
