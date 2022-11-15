import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TCoordinateResponse } from "../../../api/coordinates/TCoordinateResponse";

import { CoordinateList } from "./CoordinateList";

export default {
  title: "Consult/CoordinateList",
  component: CoordinateList,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof CoordinateList>;

const Template: ComponentStory<typeof CoordinateList> = (args) => (
  <CoordinateList {...args} />
);

export const Default = Template.bind({});
const coordinates: TCoordinateResponse[] = [
  {
    id: 3,
    isReviewedOrSkipped: false,
    items: [
      {
        id: 111111,
        isTops: false,
        cateSmallName: "チノパンツ",
        imagePaths: {
          original:
            "https://stg.leeap.jp/files/preregistered_item/142/14207/IMG_0130.JPG",
          large:
            "https://stg.leeap.jp/files/preregistered_item/142/14207/large_IMG_0130.JPG",
          largeThumb:
            "https://stg.leeap.jp/files/preregistered_item/142/14207/large_thumb_IMG_0130.JPG",
          thumb:
            "https://stg.leeap.jp/files/preregistered_item/142/14207/thumb_IMG_0130.JPG",
        },
        color: "ブラック",
      },
      {
        id: 111111,
        isTops: true,
        cateSmallName: "シャツ",
        imagePaths: {
          original:
            "https://stg.leeap.jp/files/preregistered_item/164/16436/______1_.JPG",
          large:
            "https://stg.leeap.jp/files/preregistered_item/164/16436/large_______1_.JPG",
          largeThumb:
            "https://stg.leeap.jp/files/preregistered_item/164/16436/large_thumb_______1_.JPG",
          thumb:
            "https://stg.leeap.jp/files/preregistered_item/164/16436/thumb_______1_.JPG",
        },
        color: "ベージュ",
      },
      {
        id: 111111,
        isTops: true,
        cateSmallName: "ニット",
        imagePaths: {
          original:
            "https://stg.leeap.jp/files/preregistered_item/168/16801/IMG_3520.JPG",
          large:
            "https://stg.leeap.jp/files/preregistered_item/168/16801/large_IMG_3520.JPG",
          largeThumb:
            "https://stg.leeap.jp/files/preregistered_item/168/16801/large_thumb_IMG_3520.JPG",
          thumb:
            "https://stg.leeap.jp/files/preregistered_item/168/16801/thumb_IMG_3520.JPG",
        },
        color: "ブラウン",
      },
      {
        id: 111111,
        isTops: true,
        cateSmallName: "裏起毛トレーナー",
        imagePaths: {
          original:
            "https://stg.leeap.jp/files/preregistered_item/166/16615/IMG_3437.JPG",
          large:
            "https://stg.leeap.jp/files/preregistered_item/166/16615/large_IMG_3437.JPG",
          largeThumb:
            "https://stg.leeap.jp/files/preregistered_item/166/16615/large_thumb_IMG_3437.JPG",
          thumb:
            "https://stg.leeap.jp/files/preregistered_item/166/16615/thumb_IMG_3437.JPG",
        },
        color: "エンジ",
      },
    ],
  },
];

Default.args = {
  coordinates: coordinates,
};

Default.decorators = [
  (Story) => (
    <div className="bg-slate-200 w-full h-screen pt-5">
      <Story />
    </div>
  ),
];
