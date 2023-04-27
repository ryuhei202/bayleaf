import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DressingDescription } from "./DressingDescription";

export default {
  title: "Dressing/DressingDescription",
  component: DressingDescription,
} as ComponentMeta<typeof DressingDescription>;

const Template: ComponentStory<typeof DressingDescription> = (args) => (
  <DressingDescription {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.decorators = [
  (Story) => (
    <div className="bg-clay w-full p-3">
      <Story />
    </div>
  ),
];
DefaultValues.args = {
  description:
    "今回のコーデは恋人とショッピングに行くということで、少し洋服に気を使いたいシーンに合わせて、半袖シャツにスラックスで程よくラフなコーデにしました。トップスにブルーの色味を使い、みずみずしく清涼感のある印象にしています。顔まわりに明るい色を取り入れることで、顔色が明るくなるので、パッと爽やかな雰囲気に見えます。なで肩の方はゆったりシルエットを綺麗に着こなすことができるので、上下ともにゆとりのあるサイズ感で軽さを出すのがポイントです。靴はレザースニーカーを合わせると、硬すぎずラフすぎずバランスが取れるのでおすすめです！",
  comment: {
    text: "〇〇さん、着ていてなにかお困りのことがあった際はいつでもご相談お待ちしてます！",
    stylistIcon: "/images/stylist/icon_2.jpeg",
  },
  coordinateItems: [
    {
      id: 488070,
      isTops: true,
      isPurchased: false,
      isForSale: true,
      brandName: "leeap original",
      imagePaths: {
        original:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        large:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
        largeThumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        thumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      categoryName: "ジャケット",
      colorName: "ブラック",
      price: 15000,
      discountedPrice: 12000,
      purchasePoint: 864,
      locationId: 1,
      discountRate: 20,
      rank: "A",
    },
    {
      id: 488071,
      isTops: true,
      isPurchased: false,
      isForSale: true,
      brandName: "leeap original",
      imagePaths: {
        original:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        large:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
        largeThumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        thumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      categoryName: "ジャケット",
      colorName: "ブラック",
      price: 15000,
      discountedPrice: 12000,
      purchasePoint: 864,
      locationId: 1,
      discountRate: 20,
      rank: "A",
    },
    {
      id: 488072,
      isTops: true,
      isPurchased: false,
      isForSale: true,
      brandName: "leeap original",
      imagePaths: {
        original:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        large:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
        largeThumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_thumb_IMG_3977.jpeg",
        thumb:
          "https://storage.googleapis.com/bayleaf-stg-uwear.appspot.com/item%20image/large_IMG_3977.jpeg",
      },
      categoryName: "ジャケット",
      colorName: "ブラック",
      price: 15000,
      discountedPrice: 12000,
      purchasePoint: 864,
      locationId: 1,
      discountRate: 20,
      rank: "A",
    },
  ],
};
