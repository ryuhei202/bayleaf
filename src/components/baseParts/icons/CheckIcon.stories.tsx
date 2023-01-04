import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CheckIcon } from "./CheckIcon";

export default {
  title: "BaseParts/icons/CheckIcon",
  component: CheckIcon,
} as ComponentMeta<typeof CheckIcon>;

const Template: ComponentStory<typeof CheckIcon> = () => <CheckIcon />;

export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
