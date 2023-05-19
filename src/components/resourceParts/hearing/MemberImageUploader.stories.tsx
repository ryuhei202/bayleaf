import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemberImageUploader } from "./MemberImageUploader";

export default {
  title: "ResourceParts/Hearing/MemberImageUploader",
  component: MemberImageUploader,
  argTypes: {
    onClickNext: { action: "clicked" },
    onSubmit: { action: "clicked" },
    onCancel: { action: "clicked" },
  },
} as ComponentMeta<typeof MemberImageUploader>;

const Template: ComponentStory<typeof MemberImageUploader> = (args) => (
  <MemberImageUploader {...args} />
);

export const Default = Template.bind({});
