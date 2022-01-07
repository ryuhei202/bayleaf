import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PartnerIcon } from "./PartnerIcon";

export default {
  title: "BaseParts/Icons/PartnerIcon",
  component: PartnerIcon,
} as ComponentMeta<typeof PartnerIcon>;

const Template: ComponentStory<typeof PartnerIcon> = () => <PartnerIcon />;

export const Default = Template.bind({});

export const Colored = Template.bind({});
Colored.decorators = [
  (Story) => (
    <div className="text-white bg-midnight">
      <Story />
    </div>
  ),
];
