import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";
import { EditIcon } from "./icons/EditIcon";
import { Paper } from "./Paper";
import { Typography } from "./Typography";

export default {
  title: "BaseParts/Paper",
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
Default.args = {
  children: (
    <>
      <Typography variant="body">こんにちは</Typography>
      <Button
        disableElevation
        border
        radius="small"
        size="none"
        className="flex justify-center h-8"
      >
        <EditIcon className="h-4 w-fit my-auto mr-1" />
        <Typography bold variant="body" className="my-auto">
          編集
        </Typography>
      </Button>
    </>
  ),
};
