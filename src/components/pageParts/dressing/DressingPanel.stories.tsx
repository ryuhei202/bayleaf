import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DressingPanel } from "./DressingPanel";

export default {
  title: "Dressing/DressingPanel",
  component: DressingPanel,
} as ComponentMeta<typeof DressingPanel>;

const Template: ComponentStory<typeof DressingPanel> = (args) => (
  <DressingPanel {...args} />
);

export const DefaultValues = Template.bind({});
DefaultValues.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
DefaultValues.args = {
  dressing: {
    coordinateId: 12345,
    description:
      "今回のコーデは恋人とショッピングに行くということで、少し洋服に気を使いたいシーンに合わせて、半袖シャツにスラックスで程よくラフなコーデにしました。トップスにブルーの色味を使い、みずみずしく清涼感のある印象にしています。顔まわりに明るい色を取り入れることで、顔色が明るくなるので、パッと爽やかな雰囲気に見えます。なで肩の方はゆったりシルエットを綺麗に着こなすことができるので、上下ともにゆとりのあるサイズ感で軽さを出すのがポイントです。靴はレザースニーカーを合わせると、硬すぎずラフすぎずバランスが取れるのでおすすめです！",
    comment: {
      text: "〇〇さん、着ていてなにかお困りのことがあった際はいつでもご相談お待ちしてます！",
      stylistIcon: "/images/stylist/icon_2.jpeg",
    },
    advices: [
      {
        description: "ボタンを上まで留める",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
      {
        description: "カジュアル感を出しつつ、キレイめ要素を残して",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
      {
        description: "洗練された優しい印象のコーデに",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
    ],
    footwear: {
      name: "ネイビーのキャンバススニーカー",
      imagePath: "/images/favorite_shoes/1.jpg",
    },
    coordinateItems: [
      {
        isChangeItem: false,
        item: {
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
      },
      {
        isChangeItem: false,
        item: {
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
      },
      {
        isChangeItem: false,
        item: {
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
      },
    ],
    categorizedForms: [],
  },

  hearingData: {
    target: "恋人",
    scene: "ショッピング、外食",
    impression: "清潔感",
  },
};

export const WithCahngeItems = Template.bind({});
WithCahngeItems.decorators = [
  (Story) => (
    <div className="w-full bg-clay p-3">
      <Story />
    </div>
  ),
];
WithCahngeItems.args = {
  dressing: {
    coordinateId: 12345,
    description:
      "今回のコーデは恋人とショッピングに行くということで、少し洋服に気を使いたいシーンに合わせて、半袖シャツにスラックスで程よくラフなコーデにしました。トップスにブルーの色味を使い、みずみずしく清涼感のある印象にしています。顔まわりに明るい色を取り入れることで、顔色が明るくなるので、パッと爽やかな雰囲気に見えます。なで肩の方はゆったりシルエットを綺麗に着こなすことができるので、上下ともにゆとりのあるサイズ感で軽さを出すのがポイントです。靴はレザースニーカーを合わせると、硬すぎずラフすぎずバランスが取れるのでおすすめです！",
    comment: {
      text: "〇〇さん、着ていてなにかお困りのことがあった際はいつでもご相談お待ちしてます！",
      stylistIcon: "/images/stylist/icon_2.jpeg",
    },
    advices: [
      {
        description: "ボタンを上まで留める",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
      {
        description: "カジュアル感を出しつつ、キレイめ要素を残して",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
      {
        description: "洗練された優しい印象のコーデに",
        imageFileName: `/images/advice/DSCF0295__tri.jpg`,
      },
    ],
    footwear: {
      name: "ネイビーのキャンバススニーカー",
      imagePath: "/images/favorite_shoes/1.jpg",
    },
    coordinateItems: [
      {
        isChangeItem: false,
        item: {
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
      },
      {
        isChangeItem: false,
        item: {
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
      },
      {
        isChangeItem: true,
        item: {
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
      },
    ],
    categorizedForms: [],
  },

  hearingData: {
    target: "恋人",
    scene: "ショッピング、外食",
    impression: "清潔感",
  },
};
