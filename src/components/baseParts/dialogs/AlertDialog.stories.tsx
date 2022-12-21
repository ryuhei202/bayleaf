import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertDialog } from "./AlertDialog";

export default {
  title: "BaseParts/Dialogs/AlertDialog",
  component: AlertDialog,
  argTypes: {
    onClick: {
      action: "onClick",
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
  title: "プラン変更予約が完了しました",
  description: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-24 h-24 text-[#659B5E]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  open: true,
  okBtnText: "閉じる",
};
