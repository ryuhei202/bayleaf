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
    <>
      <p className="mb-1 text-lg">決済日: 本日</p>
      <p className="mb-4 text-lg">料金: ¥5,200(税込)</p>
      <p>
        前回停止された際に料金をお支払い後洋服を借りずに停止されたため、前回プランから差額を差し引いた金額をお支払いいただいております。
      </p>
    </>
  ),
  open: true,
  okBtnText: "再開する",
  cancelBtnText: "いいえ",
};
