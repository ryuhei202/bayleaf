import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReferenceDocument } from "./ReferenceDocument";

export default {
  title: "Hearing/ReferenceDocument",
  component: ReferenceDocument,
} as ComponentMeta<typeof ReferenceDocument>;

const Template: ComponentStory<typeof ReferenceDocument> = (args) => (
  <ReferenceDocument {...args} />
);

export const Default = Template.bind({});
Default.args = {
  targetReference: {
    categoryId: 1,
    choices: [{ id: 1, name: "職場" }],
    text: "シャツの着用が必須",
  },
  impressionReference: {
    multipleImpressionsReference: {
      categoryId: 3,
      choices: [
        { id: 6, name: "優しい" },
        { id: 8, name: "年齢に合った" },
        { id: 9, name: "清潔感のある" },
      ],
      text: null,
    },
    primaryImpressionReference: {
      categoryId: 4,
      choices: [{ id: 12, name: "優しい" }],
      text: null,
    },
  },
  sleeveReference: {
    categoryId: 6,
    choices: [{ id: 23, name: "長袖3 / 半袖0" }],
    text: null,
  },
  otherReference: {
    categoryId: 8,
    choices: [],
    text: "手首は細いので、かなり補足調整できるバンドにしている",
  },
  summaryReference: {
    categoryId: 7,
    choices: [{ id: 1, name: "職場" }],
    text: "■全体イメージ（フォーマル-カジュアル度合い\n動きやすさを重視したイメージ\n\n■シルエット\n体型に合わせた細く見えるシルエット\n\n■色味\nスタイリストおすすめの色味",
  },
};
