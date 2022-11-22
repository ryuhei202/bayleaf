import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UploadButton } from "./UploadButton";

export default {
  title: "BaseParts/Legacy/Inputs/UploadButton",
  component: UploadButton,
} as ComponentMeta<typeof UploadButton>;

const Template: ComponentStory<typeof UploadButton> = (args) => (
  <UploadButton {...args} />
);

export const Default = Template.bind({});
