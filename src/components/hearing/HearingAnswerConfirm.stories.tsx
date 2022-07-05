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
          categoryId: 1,
          categoryName: "シーン",
          forms: [
            {
              title: "借りたコーデをどちらの予定で使いますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "どちらをメインに使用しますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "どちらの場所で仕事をする時間が長いですか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
          ],
        },
        {
          categoryId: 2,
          categoryName: "相手",
          forms: [
            {
              title: "普段のお仕事先で会う人を教えてください(オンライン含む)",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "中でも一番お会いする方を選択してください",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
          ],
        },
        {
          categoryId: 3,
          categoryName: "相手の服装",
          forms: [
            {
              title: "お客様や取引先の方はどんな服装をされていますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "同じ部署の方はどのような服装が多いですか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
          ],
        },
      ],
    },
    {
      answer: [
        {
          categoryId: 1,
          categoryName: "シーン",
          forms: [
            {
              title: "借りたコーデをどちらの予定で使いますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "どちらをメインに使用しますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "どちらの場所で仕事をする時間が長いですか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
          ],
        },
        {
          categoryId: 2,
          categoryName: "相手",
          forms: [
            {
              title: "普段のお仕事先で会う人を教えてください(オンライン含む)",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "中でも一番お会いする方を選択してください",
              options: [{ name: "お客様・取引先", text: null }],
            },
          ],
        },
        {
          categoryId: 3,
          categoryName: "相手の服装",
          forms: [
            {
              title: "お客様や取引先の方はどんな服装をされていますか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
            {
              title: "同じ部署の方はどのような服装が多いですか？",
              options: [
                { name: "お客様・取引先", text: null },
                { name: "お客様・取引先", text: null },
              ],
            },
          ],
        },
      ],
    },
  ],
  footer: (
    <>
      <Button variant="primary">ヒアリング完了</Button>
      <Button variant="primary">前に戻る</Button>
      <Button variant="primary">最初からやり直す</Button>
    </>
  ),
};
