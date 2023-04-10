import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TConsultingItem } from "../../../models/consult/TConsultingItem";
import { SizeDetailSelection } from "./SizeDetailSelection";

export default {
  title: "Consult/Size/SizeDetailSelection",
  component: SizeDetailSelection,
} as ComponentMeta<typeof SizeDetailSelection>;

const Template: ComponentStory<typeof SizeDetailSelection> = (args) => (
  <SizeDetailSelection {...args} />
);

export const Default = Template.bind({});

const selectedItem: TConsultingItem = {
  id: 111111,
  isTops: true,
  isPurchased: false,
  isForSale: true,
  brandName: "leeap original",
  price: 15000,
  discountedPrice: 12000,
  purchasePoint: 864,
  locationId: null,
  discountRate: 20,
  rank: "A",
  categoryName: "シャツ",
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
  colorName: "ブラック",
};

Default.args = {
  selectedItem,
};
