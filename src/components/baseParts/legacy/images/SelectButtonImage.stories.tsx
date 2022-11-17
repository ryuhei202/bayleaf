import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SelectButtonImage } from "./SelectButtonImage";

export default {
  title: "BaseParts/Legacy/Images/SelectButtonImage",
  component: SelectButtonImage,
} as ComponentMeta<typeof SelectButtonImage>;

const Template: ComponentStory<typeof SelectButtonImage> = (args) => (
  <SelectButtonImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageSrc: "https://placehold.jp/ca161c/ffffff/198x300.png",
};
Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <div className="w-20">
        <Story />
      </div>
    </div>
  ),
];
