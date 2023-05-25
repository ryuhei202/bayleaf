import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HearingSelectForm } from "./HearingSelectForm";

export default {
  title: "ResourceParts/hearing/HearingSelectForm",
  component: HearingSelectForm,
} as ComponentMeta<typeof HearingSelectForm>;

const Template: ComponentStory<typeof HearingSelectForm> = (args) => (
  <HearingSelectForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "好きなロゴを選択してください",
  options: [
    {
      id: 1,
      name: "ヤマト営業持ち込み",
      imageFilePath: "https://www.yamato-hd.co.jp/pr/logo2021/images/main.svg",
    },
    {
      id: 2,
      name: "ヤマト営業持ち込み",
      imageFilePath: "https://www.yamato-hd.co.jp/pr/logo2021/images/main.svg",
    },
    {
      id: 3,
      name: "ヤマト運輸",
      imageFilePath: "https://www.yamato-hd.co.jp/pr/logo2021/images/main.svg",
    },
    {
      id: 4,
      name: "ヤマト運輸",
      imageFilePath: "https://www.yamato-hd.co.jp/pr/logo2021/images/main.svg",
    },
  ],
};
