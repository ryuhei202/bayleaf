import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImageUploader } from "./ImageUploader";
import DefaultSrc from "../../../images/preview_default.png";

export default {
  title: "BaseParts/Legacy/ImageUploader",
  component: ImageUploader,
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = (args) => (
  <ImageUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  defaultSrc: DefaultSrc,
  preUploadImage: null,
};

Default.decorators = [
  (Story) => (
    <div className="h-screen w-full bg-slate-200">
      <Story />
    </div>
  ),
];
