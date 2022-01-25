import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FamilyIcon } from "./FamilyIcon";

export default {
  title: "BaseParts/Icons/FamilyIcon",
  component: FamilyIcon,
} as ComponentMeta<typeof FamilyIcon>;

const Template: ComponentStory<typeof FamilyIcon> = () => <FamilyIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-midnight w-fit">
      <Story />
    </div>
  ),
];
