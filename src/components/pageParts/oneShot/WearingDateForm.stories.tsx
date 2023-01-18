import { ComponentMeta, ComponentStory } from "@storybook/react";
import { WearingDateForm } from "./WearingDateForm";

export default {
  title: "PageParts/OneShot/WearingDateForm",
  component: WearingDateForm,
  argTypes: {
    onSelect: { action: "selected" },
    onSubmit: { action: "submitted" },
  },
} as ComponentMeta<typeof WearingDateForm>;

const Template: ComponentStory<typeof WearingDateForm> = (args) => (
  <WearingDateForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  earliestDate: "2023-02-05",
  selectedDate: "2023-02-16",
};
