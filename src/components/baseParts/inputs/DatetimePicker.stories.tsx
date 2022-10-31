import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DatetimePicker } from "./DatetimePicker";

export default {
  title: "BaseParts/inputs/DatetimePicker",
  component: DatetimePicker,
} as ComponentMeta<typeof DatetimePicker>;

const Template: ComponentStory<typeof DatetimePicker> = (args) => (
  <DatetimePicker {...args}></DatetimePicker>
);

export const Default = Template.bind({});
const DateFrom = new Date(2022, 10 - 1, 5);
const DateTo = new Date(2022, 11 - 1, 20);

Default.args = {
  selectableDateFrom: "2022/11/14",
  selectableDateTo: "2022/11/30",
};
Default.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
