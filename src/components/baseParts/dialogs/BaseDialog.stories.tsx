import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BaseDialog } from "./BaseDialog";

export default {
  title: "BaseParts/Dialogs/BaseDialog",
  component: BaseDialog,
  argTypes: {
    onClick: {
      action: "onClick",
    },
    onClose: {
      action: "onClose",
    },
  },
} as ComponentMeta<typeof BaseDialog>;

const Template: ComponentStory<typeof BaseDialog> = (args) => (
  <BaseDialog {...args} />
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
      className="h-24 w-24 text-[#659B5E]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  open: true,
};
