import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ExternalLink } from "./ExternalLink";

export default {
  title: "BaseParts/ExternalLink",
  component: ExternalLink,
} as ComponentMeta<typeof ExternalLink>;

const Template: ComponentStory<typeof ExternalLink> = (args) => (
  <ExternalLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "お問い合わせフォーム",
  href: `${process.env.REACT_APP_SIRNIGHT_URL}/faq/register#os0_3qsz1jip`,
};

Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
