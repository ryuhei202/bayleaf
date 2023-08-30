import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DatetimePicker } from "./DatetimePicker";

export default {
  title: "BaseParts/Legacy/inputs/DatetimePicker",
  component: DatetimePicker,
} as ComponentMeta<typeof DatetimePicker>;

const Template: ComponentStory<typeof DatetimePicker> = (args) => (
  <DatetimePicker {...args}></DatetimePicker>
);

export const Default = Template.bind({});
Default.args = {
  selectableDateFrom: "2022/11/14",
  selectableDateTo: "2022/11/30",
};
Default.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
