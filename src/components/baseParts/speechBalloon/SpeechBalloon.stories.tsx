import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "../legacy/Typography";
import { SpeechBalloon } from "./SpeechBalloon";

export default {
  title: "BaseParts/SpeechBalloon/SpeechBalloon",
  component: SpeechBalloon,
} as ComponentMeta<typeof SpeechBalloon>;

const Template: ComponentStory<typeof SpeechBalloon> = (args) => (
  <SpeechBalloon {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
Default.args = {
  arrowPlacement: "left",
  children: (
    <>
      <Typography size="xs">
        初めてのコーデなので、ご不明な点もあるかと思いますが、気になることはなんでもご相談くださいね。
      </Typography>
    </>
  ),
};
