import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CoworkerIcon } from "./CoworkerIcon";

export default {
  title: "BaseParts/Icons/CoworkerIcon",
  component: CoworkerIcon,
} as ComponentMeta<typeof CoworkerIcon>;

const Template: ComponentStory<typeof CoworkerIcon> = () => <CoworkerIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-midnight w-fit">
      <Story />
    </div>
  ),
];
