import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertDialog } from "./AlertDialog";

export default {
  title: "BaseParts/Dialogs/AlertDialog",
  component: AlertDialog,
  argTypes: {
    onClickOk: {
      action: "onClickOk",
    },
    onClose: {
      action: "onClose",
    },
  },
} as ComponentMeta<typeof AlertDialog>;

const Template: ComponentStory<typeof AlertDialog> = (args) => (
  <AlertDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  description: (
    <>
      <b>デフォルト</b>テキスト
    </>
  ),
};
