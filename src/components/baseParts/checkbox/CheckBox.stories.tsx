import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckBox } from "./CheckBox";

export default {
  title: "BaseParts/CheckBox",
  component: CheckBox,
  argTypes: {
    onChange: { action: "clicked" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
  <CheckBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "すぐにプラン変更をする",
};

Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
