import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ErrorPage } from "./ErrorPage";

export default {
  title: "BaseParts/Pages/ErrorPage",
  component: ErrorPage,
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
  <ErrorPage {...args} />
);

export const Unexpected = Template.bind({});
Unexpected.args = {
  message: "予期せぬエラーが発生しました",
};
