import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CancelActionText } from "./CancelActionText";

export default {
  title: "BaseParts/text/CancelActionText",
  component: CancelActionText,
} as ComponentMeta<typeof CancelActionText>;

const Template: ComponentStory<typeof CancelActionText> = (args) => (
  <CancelActionText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "キャンセルする",
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
