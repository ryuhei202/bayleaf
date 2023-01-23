import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StartHearingPage } from "./StartHearingPage";

export default {
  title: "PageParts/OneShot/StartHearingPage",
  component: StartHearingPage,
  argTypes: {
    onClick: { action: "started" },
    onCancel: { action: "cancelled" },
  },
} as ComponentMeta<typeof StartHearingPage>;

const Template: ComponentStory<typeof StartHearingPage> = (args) => (
  <StartHearingPage {...args} />
);

export const Default = Template.bind({});
