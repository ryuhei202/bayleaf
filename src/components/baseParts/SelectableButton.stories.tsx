import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectableButton } from "./SelectableButton";

export default {
  title: "BaseParts/SelectableButton",
  component: SelectableButton,
} as ComponentMeta<typeof SelectableButton>;

const Template: ComponentStory<typeof SelectableButton> = (args) => (
  <SelectableButton {...args} />
);

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: "サンプルテキスト",
};
WithoutImage.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];

export const WithImage = Template.bind({});
WithImage.args = {
  title: "クロネコヤマトの宅急便",
  imageFilePath: "https://www.yamato-hd.co.jp/pr/logo2021/images/main.svg",
};
WithImage.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
