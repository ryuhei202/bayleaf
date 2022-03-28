import { MenuItemData } from "./MenuItemData";

export module MenuItemDefinition {
  export module Shared {
    export const deliveryStatus: MenuItemData = {
      path: "/yamato/select_delivery_status",
      name: "配達状況の確認"
    };
    export const coordinate: MenuItemData = {
      path: "/rental/plan_check",
      name: "コーデの着こなし方"
    };
    export const uploadPhoto: MenuItemData = {
      path: "/profile/photos",
      name: "写真のアップロード"
    };
    export const profile: MenuItemData = {
      path: "/profile",
      name: "会員基本情報の変更"
    };
    export const changePlan: MenuItemData = {
      path: "/payment",
      name: "料金プランの変更"
    };
    export const paymentSetting: MenuItemData = {
      path: "/profile/payment",
      name: "クレジット情報の変更"
    };
    export const emailSetting: MenuItemData = {
      path: "/email",
      name: "メールアドレスの変更"
    };
    export const rentalHistory: MenuItemData = {
      path: "/rental/history",
      name: "レンタル履歴"
    };
    export const paymentLog: MenuItemData = {
      path: "/payment/log",
      name: "決済履歴"
    };
    export const suspend: MenuItemData = {
      path: "/suspend",
      name: "有料会員の停止・退会"
    };
  }

  export module Leeap {
    export const returnItem: MenuItemData = {
      path: "/return/select_reserve_target",
      name: "洋服の返却"
    };
    export const faq: MenuItemData = { path: "/faq", name: "よくある質問" };
    export const inquiry: MenuItemData = {
      path: "/inquiry",
      name: "お問い合わせ"
    };
    export const pointLog: MenuItemData = {
      path: "/payment/log_point",
      name: "ポイント履歴"
    };
    export const invite: MenuItemData = {
      path: "/invite",
      name: "友人にleeapを紹介"
    };
    export const feedback: MenuItemData = {
      path: "/feedback",
      name: "ご意見フォーム"
    };
  }

  export module Marriage {
    export const faq: MenuItemData = {
      path: "/ibj/faq_renewal",
      name: "よくある質問"
    };
    export const inquiry: MenuItemData = {
      path: "/ibj/inquiry_renewal",
      name: "お問い合わせ"
    };
    export const changeCoorde: MenuItemData = {
      path: "/change_coorde/select?is_payment=true",
      name: "コーデの交換"
    };
  }
}
