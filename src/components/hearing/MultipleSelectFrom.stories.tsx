import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MultipleSelectForm } from "./MultipleSelectForm";

export default {
  title: "Hearing/MultipleSelectForm",
  component: MultipleSelectForm,
} as ComponentMeta<typeof MultipleSelectForm>;

const Template: ComponentStory<typeof MultipleSelectForm> = (args) => (
  <MultipleSelectForm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  response: {
    id: 17,
    categoryId: 2,
    categoryName: "意識する相手",
    multipleAnswerNextFormId: null,
    title: "どなたと会う予定ですか？",
    options: [
      {
        id: 26,
        name: "同僚(上司、部下)",
        nextFormId: 8,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 27,
        name: "家族",
        nextFormId: 8,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 28,
        name: "恋人",
        nextFormId: 8,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 29,
        name: "友人(異性)",
        nextFormId: 8,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 30,
        name: "友人(同性)",
        nextFormId: 8,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 9999,
        name: "その他",
        nextFormId: 8,
        isText: true,
        isSingleAnswer: true,
      },
    ],
  },
  onSubmit: () => {},
  onCancel: () => {},
};
