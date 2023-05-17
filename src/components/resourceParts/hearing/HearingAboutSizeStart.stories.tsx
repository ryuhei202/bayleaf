import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HearingAboutSizeStart } from "./HearingAboutSizeStart";

export default {
  title: "ResourceParts/Hearing/HearingAboutSizeStart",
  component: HearingAboutSizeStart,
  argTypes: {
    onClick: { action: "started" },
  },
} as ComponentMeta<typeof HearingAboutSizeStart>;

const Template: ComponentStory<typeof HearingAboutSizeStart> = (args) => (
  <HearingAboutSizeStart />
);

export const Default = Template.bind({});
Default.args = {};
