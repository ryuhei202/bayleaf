import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";
import { FooterWrapper } from "./FooterWrapper";

export default {
  title: "BaseParts/Legacy/FooterWrapper",
  component: FooterWrapper,
} as ComponentMeta<typeof FooterWrapper>;

const Template: ComponentStory<typeof FooterWrapper> = (args) => (
  <FooterWrapper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Button>ボタン1</Button>
      <Button>ボタン2</Button>
      <Button>ボタン3</Button>
    </>
  ),
};
