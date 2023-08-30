import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Loader } from "./Loader";

export default {
  title: "BaseParts/Loaders/Loader",
  component: Loader,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];

export const Login = Template.bind({});
Login.args = {
  caption: "ログイン中",
};

Login.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
