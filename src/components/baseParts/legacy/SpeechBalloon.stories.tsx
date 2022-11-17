import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Divider } from "./Divider";
import { EditButton } from "./EditButton";
import { SpeechBalloon } from "./SpeechBalloon";
import { Typography } from "./Typography";

export default {
  title: "BaseParts/SpeechBalloon",
  component: SpeechBalloon,
} as ComponentMeta<typeof SpeechBalloon>;

const Template: ComponentStory<typeof SpeechBalloon> = (args) => (
  <SpeechBalloon {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
Default.args = {
  children: (
    <>
      <Typography size="xs">こんにちは</Typography>
    </>
  ),
};
