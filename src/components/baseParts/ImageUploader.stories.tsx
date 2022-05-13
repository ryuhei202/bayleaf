import { ComponentMeta, ComponentStory } from "@storybook/react";

import { useImageUploadHandler } from "../../hooks/handler/image/useImageUploadHandler";
import { ImageUploader } from "./ImageUploader";

export default {
  title: "baseParts/ImageUploader",
  component: ImageUploader,
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = (args) => (
  <ImageUploader {...args} />
);

export const Default = Template.bind({});

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full h-screen">
      <Story />
    </div>
  ),
];
