import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateItemResponse } from "../../../api/coordinates/TCoordinateItemResponse";
import { SizeDetailSelection } from "./SizeDetailSelection";

export default {
  title: "Consult/Size/SizeDetailSelection",
  component: SizeDetailSelection,
} as ComponentMeta<typeof SizeDetailSelection>;

const Template: ComponentStory<typeof SizeDetailSelection> = (args) => (
  <SizeDetailSelection {...args} />
);

export const Default = Template.bind({});

const selectedItem: TCoordinateItemResponse = {
  id: 111111,
  isTops: true,
  cateSmallName: "シャツ",
  imagePaths: {
    original:
      "https://stg.leeap.jp/files/preregistered_item/168/16899/IMG_3977.JPG",
    large:
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_IMG_3977.JPG",
    largeThumb:
      "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
    thumb:
      "https://stg.leeap.jp/files/preregistered_item/168/16899/thumb_IMG_3977.JPG",
  },
  color: "ブラック",
};

Default.args = {
  selectedItem,
};

Default.decorators = [(Story) => <Story />];
