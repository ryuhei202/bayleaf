import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ConfirmDialog } from "./ConfirmDialog";

export default {
  title: "BaseParts/ConfirmDialog",
  component: ConfirmDialog,
} as ComponentMeta<typeof ConfirmDialog>;

const Template: ComponentStory<typeof ConfirmDialog> = (args) => (
  <ConfirmDialog {...args} />
);

export const Default = Template.bind({});
Default.args = {
  open: true,
  onClose: () => {},
  title: "最初からやり直しますか？",
  onClickOk: () => {},
  onClickCancel: () => {},
};
