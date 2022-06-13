import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HearingAnswerConfirm } from "./HearingAnswerConfirm";
import { Button } from "../baseParts/Button";

export default {
  title: "Hearing/HearingAnswerConfirm",
  component: HearingAnswerConfirm,
} as ComponentMeta<typeof HearingAnswerConfirm>;

const Template: ComponentStory<typeof HearingAnswerConfirm> = (args) => (
  <HearingAnswerConfirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "内容を確認してください。",
  confirmAnswers: [
    {
      answer: [
        {
          categoryName: "シーン",
          forms: [
            {
              title: "借りたコーデをどちらの予定で使いますか？",
              optionName: ["特別な予定"],
            },
            {
              title: "どちらをメインに使用しますか？",
              optionName: ["プライベートメイン"],
            },
            {
              title: "どちらの場所で仕事をする時間が長いですか？",
              optionName: ["社内が長い"],
            },
          ],
        },
        {
          categoryName: "相手",
          forms: [
            {
              title: "普段のお仕事先で会う人を教えてください(オンライン含む)",
              optionName: ["お客様・取引先", "同僚(上司、部下)"],
            },
            {
              title: "中でも一番お会いする方を選択してください",
              optionName: ["お客様・取引先"],
            },
          ],
        },
        {
          categoryName: "相手の服装",
          forms: [
            {
              title: "お客様や取引先の方はどんな服装をされていますか？",
              optionName: [
                "スーツ・ジャケットスタイル",
                "シャツスタイル",
                "私服、自由",
              ],
            },
            {
              title: "同じ部署の方はどのような服装が多いですか？",
              optionName: ["シャツスタイル"],
            },
          ],
        },
      ],
    },
    {
      answer: [
        {
          categoryName: "シーン",
          forms: [
            {
              title: "借りたコーデをどちらの予定で使いますか？",
              optionName: ["特別な予定"],
            },
            {
              title: "どちらをメインに使用しますか？",
              optionName: ["プライベートメイン"],
            },
            {
              title: "どちらの場所で仕事をする時間が長いですか？",
              optionName: ["社内が長い"],
            },
          ],
        },
        {
          categoryName: "相手",
          forms: [
            {
              title: "普段のお仕事先で会う人を教えてください(オンライン含む)",
              optionName: ["お客様・取引先", "同僚(上司、部下)"],
            },
            {
              title: "中でも一番お会いする方を選択してください",
              optionName: ["お客様・取引先"],
            },
          ],
        },
        {
          categoryName: "相手の服装",
          forms: [
            {
              title: "お客様や取引先の方はどんな服装をされていますか？",
              optionName: [
                "スーツ・ジャケットスタイル",
                "シャツスタイル",
                "私服、自由",
              ],
            },
            {
              title: "同じ部署の方はどのような服装が多いですか？",
              optionName: ["シャツスタイル"],
            },
          ],
        },
      ],
    },
  ],
  Footer: (
    <>
      <Button variant="primary">ヒアリング完了</Button>
      <Button variant="primary">前に戻る</Button>
      <Button variant="primary">最初からやり直す</Button>
    </>
  ),
};
