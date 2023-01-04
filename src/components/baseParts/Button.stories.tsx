import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "BaseParts/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "ボタン",
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
