import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ConfirmDialog } from "./ConfirmDialog";

export default {
  title: "BaseParts/Dialogs/ConfirmDialog",
  component: ConfirmDialog,
  argTypes: {
    onClickOk: {
      action: "onClickOk",
    },
    onClose: {
      action: "onClose",
    },
    onClickCancel: {
      action: "onClickCancel",
    },
  },
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args) => (
  <ConfirmDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
