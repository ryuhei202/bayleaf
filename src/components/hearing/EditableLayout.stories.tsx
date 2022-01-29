import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EditableLayout } from "./EditableLayout";

export default {
  title: "Hearing/EditableLayout",
  component: EditableLayout,
} as ComponentMeta<typeof EditableLayout>;

const Template: ComponentStory<typeof EditableLayout> = (args) => (
  <EditableLayout {...args} />
);

export const Default = Template.bind({});
