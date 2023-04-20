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
Default.args = {};

export const FirstTimeOneShot = Template.bind({});
FirstTimeOneShot.args = {
  discountPrice: 2000,
  point: 1000,
};
