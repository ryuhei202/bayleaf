import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WelcomePage } from "./WelcomePage";

export default {
  title: "PageParts/OneShot/WelcomePage",
  component: WelcomePage,
  argTypes: {
    onClickStart: { action: "started" },
  },
} as ComponentMeta<typeof WelcomePage>;

const Template: ComponentStory<typeof WelcomePage> = (args) => (
  <WelcomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  serialCodesIndexData: [
    {
      serialCampaignId: 1,
    },
  ],
};
export const FirstTimeOneShot = Template.bind({});
FirstTimeOneShot.args = {
  serialCodesIndexData: [
    {
      serialCampaignId: 224,
    },
  ],
};
