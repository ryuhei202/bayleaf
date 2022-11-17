import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EditButton } from "./EditButton";

export default {
  title: "BaseParts/EditButton",
  component: EditButton,
} as ComponentMeta<typeof EditButton>;

const Template: ComponentStory<typeof EditButton> = () => <EditButton />;

export const Default = Template.bind({});
