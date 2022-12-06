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
  title: "返却用QRコードを発行しますか？",
  description: "いつでも返却方法の変更、キャンセルができます",
  open: true,
  okBtnText: "発行する",
  cancelBtnText: "いいえ",
};
