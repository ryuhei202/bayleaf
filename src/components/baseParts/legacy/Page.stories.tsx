import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Page } from "./Page";
import { PageHeader } from "./PageHeader";

export default {
  title: "BaseParts/Page",
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Default = Template.bind({});
