import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateItemResponse } from "../../api/coordinates/TCoordinateItemResponse";
import { CoordinateItemImages } from "./CoordinateItemImages";

export default {
  title: "Review/CoordinateItemImages",
  component: CoordinateItemImages,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CoordinateItemImages>;

const Template: ComponentStory<typeof CoordinateItemImages> = (args) => (
  <CoordinateItemImages {...args} />
);

export const Default = Template.bind({});
const items = [...Array(4)].map(() => {
  return {
    caption: "シャツ",
    imagePaths: {
      defaultPath:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
      expandedPath:
        "https://stg.leeap.jp/files/preregistered_item/168/16899/large_IMG_3977.JPG",
    },
  };
});

Default.args = {
  items,
};

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full p-3">
      <Story />
    </div>
  ),
];
