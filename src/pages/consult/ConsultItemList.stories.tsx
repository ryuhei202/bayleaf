import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TConsultingItem } from "../../models/consult/TConsultingItem";
import { ConsultItemList } from "./ConsultItemList";

export default {
  title: "Consult/ConsultItemList",
  component: ConsultItemList,
} as ComponentMeta<typeof ConsultItemList>;

const Template: ComponentStory<typeof ConsultItemList> = (args) => (
  <ConsultItemList {...args} />
);

export const Default = Template.bind({});
const items: TConsultingItem[] = [
  {
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
  },
  {
    id: 111112,
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
  },
];

Default.args = {
  items,
  title: (
    <>
      どのアイテムのサイズ感が
      <br />
      気になりますか？
    </>
  ),
  setSelectedItems: () => {},
};

Default.decorators = [(Story) => <Story />];
