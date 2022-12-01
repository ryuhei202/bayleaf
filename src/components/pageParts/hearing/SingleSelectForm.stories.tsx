import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SingleSelectForm } from "./SingleSelectForm";

export default {
  title: "Hearing/SingleSelectForm",
  component: SingleSelectForm,
} as ComponentMeta<typeof SingleSelectForm>;

const Template: ComponentStory<typeof SingleSelectForm> = (args) => (
  <SingleSelectForm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  response: {
    id: 2,
    categoryId: 1,
    categoryName: "使いたいシーン",
    multipleAnswerNextFormId: null,
    title: "どちらをメインに使用しますか？",
    options: [
      {
        id: 3,
        name: "仕事メイン",
        nextFormId: 9,
        isText: false,
        isSingleAnswer: true,
      },
      {
        id: 4,
        name: "プライベートメイン",
        nextFormId: 11,
        isText: false,
        isSingleAnswer: true,
      },
    ],
  },
  onSubmit: () => {},
  onCancel: () => {},
};
