import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Message } from "./Message";

export default {
  title: "BaseParts/Messages/Message",
  component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => (
  <Message {...args} />
);

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  children: "予期せぬエラーが発生しました",
};

Error.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
