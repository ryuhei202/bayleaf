import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Divider } from "./Divider";
import { EditButton } from "./EditButton";
import { Paper } from "./Paper";
import { Typography } from "./Typography";

export default {
  title: "BaseParts/Legacy/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="w-full bg-slate-200 p-3">
      <Story />
    </div>
  ),
];
Default.args = {
  children: (
    <>
      <Typography size="xs" className="mb-4">
        こんにちは
      </Typography>
      <EditButton />
      <Divider />
    </>
  ),
};
