import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SceneDetailForm } from "./SceneDetailForm";

export default {
  title: "Consult/Scene/SceneDetailForm",
  component: SceneDetailForm,
} as ComponentMeta<typeof SceneDetailForm>;

const Template: ComponentStory<typeof SceneDetailForm> = (args) => (
  <SceneDetailForm {...args} />
);
export const Default = Template.bind({});
Default.args = {
  itemImageUrls: [
    "https://stg.leeap.jp/files/preregistered_item/168/16899/thumb_IMG_3977.JPG",
    "https://stg.leeap.jp/files/preregistered_item/168/16899/thumb_IMG_3977.JPG",
    "https://stg.leeap.jp/files/preregistered_item/168/16899/thumb_IMG_3977.JPG",
    "https://stg.leeap.jp/files/preregistered_item/168/16899/thumb_IMG_3977.JPG",
  ],
  setFlexMessage: () => {},
};

Default.decorators = [(Story) => <Story />];
