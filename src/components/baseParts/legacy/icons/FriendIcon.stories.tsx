import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FriendIcon } from "./FriendIcon";

export default {
  title: "BaseParts/Legacy/Icons/FriendIcon",
  component: FriendIcon,
} as ComponentMeta<typeof FriendIcon>;

const Template: ComponentStory<typeof FriendIcon> = () => <FriendIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="w-fit bg-themeGray text-white">
      <Story />
    </div>
  ),
];
