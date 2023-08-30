import { ComponentMeta, ComponentStory } from "@storybook/react";
import { HearingConfirmButtons } from "./HearingConfirmButtons";

export default {
  title: "ResourceParts/hearing/HearingConfirmButton",
  component: HearingConfirmButtons,
} as ComponentMeta<typeof HearingConfirmButtons>;

const Template: ComponentStory<typeof HearingConfirmButtons> = (args) => (
  <HearingConfirmButtons {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
