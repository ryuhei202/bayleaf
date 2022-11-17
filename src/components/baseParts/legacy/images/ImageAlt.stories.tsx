import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ImageAlt } from "./ImageAlt";

export default {
  title: "BaseParts/Images/ImageAlt",
  component: ImageAlt,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof ImageAlt>;

const Template: ComponentStory<typeof ImageAlt> = (args) => (
  <ImageAlt {...args} />
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
