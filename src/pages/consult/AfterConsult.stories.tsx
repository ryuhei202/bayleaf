import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AfterConsult } from "./AfterConsult";

export default {
  title: "Consult/AfterConsult",
  component: AfterConsult,
} as ComponentMeta<typeof AfterConsult>;

const Template: ComponentStory<typeof AfterConsult> = (args) => (
  <AfterConsult {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: (
    <>
      スタイリストからLINEで
      <br />
      ご相談内容を詳しく伺います！
    </>
  ),
  subTitle:
    "コーデを自信を持って着ていただけるように、お悩み内容を確認しスタイリストからご連絡させていただきます。",
  btnText: "LINEへ戻る",
  onClick: () => {},
};

Default.decorators = [(Story) => <Story />];
