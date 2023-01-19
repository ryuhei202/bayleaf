import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { BeforeHearingConfirm } from "./BeforeHearingConfirm";

export default {
  title: "Hearing/BeforeHearingConfirm",
  component: BeforeHearingConfirm,
} as ComponentMeta<typeof BeforeHearingConfirm>;

const Template: ComponentStory<typeof BeforeHearingConfirm> = (args) => (
  <BeforeHearingConfirm {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.args = {
  onClick: () => {},
};

DefaultValues.decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
];
