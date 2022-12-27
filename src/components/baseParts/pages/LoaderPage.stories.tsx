import { ComponentMeta, ComponentStory } from "@storybook/react";
import { LoaderPage } from "./LoaderPage";

export default {
  title: "BaseParts/Pages/LoaderPage",
  component: LoaderPage,
} as ComponentMeta<typeof LoaderPage>;

const Template: ComponentStory<typeof LoaderPage> = (args) => (
  <LoaderPage {...args} />
);

export const Default = Template.bind({});

export const Login = Template.bind({});
Login.args = {
  caption: "ログイン中",
};
