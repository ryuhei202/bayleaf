import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HearingAboutSizeConfirm } from "./HearingAboutSizeConfirm";

export default {
  title: "ResourceParts/Hearing/HearingAboutSizeConfirm",
  component: HearingAboutSizeConfirm,
  argTypes: {
    onSubmit: { action: "onSubmit" },
    onClickBack: { action: "onClickBack" },
  },
} as ComponentMeta<typeof HearingAboutSizeConfirm>;

const Template: ComponentStory<typeof HearingAboutSizeConfirm> = (args) => (
  <HearingAboutSizeConfirm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  topsChoice: "Lサイズ",
  bottomsChoice: "ウエスト:82〜83cm　L1サイズああああ",
  waistChoice: "痩せ型でお腹は出ていない",
  hipChoice: "やや出てる",
  shoulderChoice: "いかり肩",
  bustChoice: "がっしり",
  imageSrc: "https://picsum.photos/200",
};

export const NoImage = Template.bind({});
NoImage.args = {
  topsChoice: "Lサイズ",
  bottomsChoice: "ウエスト:82〜83cm　L1サイズああああ",
  waistChoice: "痩せ型でお腹は出ていない",
  hipChoice: "やや出てる",
  shoulderChoice: "いかり肩",
  bustChoice: "がっしり",
};
