import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectEditHearing } from "./SelectEditHearing";

export default {
  title: "Hearing/SelectEditHearing",
  component: SelectEditHearing,
} as ComponentMeta<typeof SelectEditHearing>;

const Template: ComponentStory<typeof SelectEditHearing> = (args) => (
  <SelectEditHearing {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  hearings: [
    {
      coordinateId: 11111111111,
      categorizedForms: [
        {
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
                { name: "お客様・取引先", text: "ああああああ" },
              ],
            },
          ],
        },
        {
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
      coordinateId: 2222222222,
      categorizedForms: [
        {
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
};
