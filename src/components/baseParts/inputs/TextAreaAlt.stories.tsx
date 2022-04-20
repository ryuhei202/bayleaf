import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TextAreaAlt } from "./TextAreaAlt";

export default {
  title: "BaseParts/Inputs/TextAreaAlt",
  component: TextAreaAlt,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof TextAreaAlt>;

const Template: ComponentStory<typeof TextAreaAlt> = (args) => (
  <TextAreaAlt {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
