import { ComponentMeta, ComponentStory } from "@storybook/react";
import { EditIcon } from "./EditIcon";

export default {
  title: "BaseParts/Legacy/Icons/EditIcon",
  component: EditIcon,
} as ComponentMeta<typeof EditIcon>;

const Template: ComponentStory<typeof EditIcon> = () => <EditIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="w-fit bg-themeGray text-white">
      <Story />
    </div>
  ),
];
