import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ScheduleDiagram } from "./ScheduleDiagram";

export default {
  title: "PageParts/OneShot/ScheduleDiagram",
  component: ScheduleDiagram,
} as ComponentMeta<typeof ScheduleDiagram>;

const Template: ComponentStory<typeof ScheduleDiagram> = (args) => (
  <ScheduleDiagram {...args} />
);

export const Default = Template.bind({});
Default.argTypes = {
  wearDate: {
    type: { name: "string", required: false },
    control: {
      type: null,
    },
    defaultValue: undefined,
  },
};
Default.args = {
  wearDate: undefined,
};

export const WithWearDate = Template.bind({});
WithWearDate.args = {
  wearDate: "2023-01-01",
};
