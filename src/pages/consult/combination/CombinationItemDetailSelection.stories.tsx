import { ComponentMeta, ComponentStory } from "@storybook/react";
import { COMBINATION_ITEM_CATEGORY } from "../../../models/consult/TCombinationItemCategory";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { CombinationItemDetailSelection } from "./CombinationItemDetailSelection";

export default {
  title: "Consult/Combination/CombinationItemDetailSelection",
  component: CombinationItemDetailSelection,
} as ComponentMeta<typeof CombinationItemDetailSelection>;

const Template: ComponentStory<typeof CombinationItemDetailSelection> = (
  args
) => <CombinationItemDetailSelection {...args} />;

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
  itemCategory: COMBINATION_ITEM_CATEGORY.TOPS,
  onSubmit: () => {},
};
