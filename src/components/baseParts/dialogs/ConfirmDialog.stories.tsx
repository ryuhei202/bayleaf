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

export const Unsuspend = Template.bind({});
Unsuspend.args = {
  title: "スタンダードプランで再開しますか？",
  description: (
    <span>
      料金: 7480円(税込)
      <br />
      次回決済日: 次回出荷日
    </span>
  ),
  open: true,
  okBtnText: "再開する",
  cancelBtnText: "いいえ",
};
