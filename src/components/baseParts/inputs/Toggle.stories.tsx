import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toggle } from "./Toggle";

export default {
  title: "BaseParts/Inputs/Toggle",
  component: Toggle,
  argTypes: {
    setState: { action: "clicked" },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
