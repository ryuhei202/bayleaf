import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Toggle } from "./Toggle";

export default {
  title: "BaseParts/Legacy/Inputs/Toggle",
  component: Toggle,
  argTypes: {
    setState: { action: "clicked" },
  },
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="w-full bg-slate-200 p-3">
      <Story />
    </div>
  ),
];
