import { ComponentMeta, ComponentStory } from "@storybook/react";
import { PageHeader } from "./PageHeader";

export default {
  title: "BaseParts/Legacy/PageHeader",
  component: PageHeader,
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => (
  <PageHeader {...args} />
);

export const StringTitle = Template.bind({});
StringTitle.args = {
  title: "タイトル",
};

export const NodeTitle = Template.bind({});
NodeTitle.args = {
  title: (
    <>
      相手にどんな印象を
      <br />
      与えたいですか？
    </>
  ),
};
