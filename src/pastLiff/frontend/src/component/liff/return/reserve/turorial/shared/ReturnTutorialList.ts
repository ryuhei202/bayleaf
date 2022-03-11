import { ReturnAssetPath } from "../../../../../../model/liff/shared/assets/ReturnAssetPath";
import { ReturnTutorialData } from "../../../../../../model/liff/return/data/ReturnTutorialData";

/**
 * FamilyMart
 */
export const FamilyMart: ReturnTutorialData[] = [
  {
    stepId: 1,
    stepHeader: "返却コーデをダンボールにつめる",
    stepImagePath: ReturnAssetPath.tutorialFamilyMartIconBox,
    stepBody: "返却するコーデを全て忘れずに配送時のダンボールにつめます。"
  },
  {
    stepId: 2,
    stepHeader: "返却用のQRコードを発行します",
    stepImagePath: ReturnAssetPath.tutorialFamilyMartIconQr,
    stepBody: "このまま作業を進めてQRコードを発行します。"
  },
  {
    stepId: 3,
    stepHeader: "Famiポートを操作",
    stepImagePath: ReturnAssetPath.tutorialFamilyMartIconPort,
    stepBody:
      "ファミリーマートにあるFamiポートにて配送サービスを選択して進みます。"
  },
  {
    stepId: 4,
    stepHeader: "端末にQRコードをかざします",
    stepImagePath: ReturnAssetPath.tutorialFamilyMartIconPhone,
    stepBody:
      "QRコードをかざすか、もしくは10桁の受付番号を入力してお届け希望日時を選択します。"
  },
  {
    stepId: 5,
    stepHeader: "申込券をレジへ持参します",
    stepImagePath: ReturnAssetPath.tutorialFamilyMartIconTicket,
    stepBody: "30分以内に荷物と申し込み券をレジへ持参し発送手続き完了です。"
  }
];

/**
 * SevenEleven
 */
export const SevenEleven: ReturnTutorialData[] = [
  {
    stepId: 1,
    stepHeader: "返却コーデをダンボールにつめる",
    stepImagePath: ReturnAssetPath.tutorialSevenElevenMartIconBox,
    stepBody: "返却するコーデを全て忘れずに配送時のダンボールにつめます。"
  },
  {
    stepId: 2,
    stepHeader: "返却用のバーコードを発行します",
    stepImagePath: ReturnAssetPath.tutorialSevenElevenMartIconBarcode,
    stepBody: "このまま作業を進めてバーコードを発行します。"
  },
  {
    stepId: 3,
    stepHeader: "セブンイレブンのレジにいきます",
    stepImagePath: ReturnAssetPath.tutorialSevenElevenMartIconSend,
    stepBody:
      "発行したバーコード画面をレジにて提示し、返却アイテムを渡して返却します。"
  }
];

/**
 * YamatoSend
 */
export const YamatoSend: ReturnTutorialData[] = [
  {
    stepId: 1,
    stepHeader: "返却コーデをダンボールにつめる",
    stepImagePath: ReturnAssetPath.tutorialYamatoSendIconBox,
    stepBody: "返却するコーデを全て忘れずに配送時のダンボールにつめます。"
  },
  {
    stepId: 2,
    stepHeader: "返却用のQRコードを発行します",
    stepImagePath: ReturnAssetPath.tutorialYamatoSendIconQr,
    stepBody: "このまま作業を進めてQRコードを発行します。"
  },
  {
    stepId: 3,
    stepHeader: "ネコピットを操作",
    stepImagePath: ReturnAssetPath.tutorialYamatoSendIconPort,
    stepBody:
      "お近くのヤマト営業所にあるネコピットで提携フリマサイト・提携企業サイトを選択します。"
  },
  {
    stepId: 4,
    stepHeader: "QRコードをかざします",
    stepImagePath: ReturnAssetPath.tutorialYamatoSendIconQr,
    stepBody:
      "２次元コードをお持ちの方を選択してQRコードをかざすか、10桁の受付番号を入力します。"
  },
  {
    stepId: 5,
    stepHeader: "送り状を印刷",
    stepImagePath: ReturnAssetPath.tutorialYamatoSendIconTicket,
    stepBody:
      "お届け希望日選択してネコピットより「送り状を印刷」して窓口へご持参ください。"
  }
];

/**
 * YamatoShuka
 */
export const YamatoShuka: ReturnTutorialData[] = [
  {
    stepId: 1,
    stepHeader: "返却コーデをダンボールにつめる",
    stepImagePath: ReturnAssetPath.tutorialYamatoShukaIconBox,
    stepBody: "返却するコーデを全て忘れずに配送時のダンボールにつめます。"
  },
  {
    stepId: 2,
    stepHeader: "集荷日時を指定する",
    stepImagePath: ReturnAssetPath.tutorialYamatoShukaIconDate,
    stepBody: "この後のフォームで集荷日時をご指定して集荷依頼を完了します。"
  },
  {
    stepId: 3,
    stepHeader: "集荷がきたら返却アイテムを渡します",
    stepImagePath: ReturnAssetPath.tutorialYamatoShukaIconPass,
    stepBody:
      "ご希望の日時にヤマトドライバーが受け取りに参りますので返却アイテムをお渡しください。"
  }
];

/**
 * Pudo
 */
export const Pudo: ReturnTutorialData[] = [
  {
    stepId: 1,
    stepHeader: "返却コーデをダンボールにつめる",
    stepImagePath: ReturnAssetPath.tutorialPudoIconBox,
    stepBody: "返却するコーデを全て忘れずに配送時のダンボールにつめます。"
  },
  {
    stepId: 2,
    stepHeader: "返却用のQRコードを発行します",
    stepImagePath: ReturnAssetPath.tutorialPudoIconQr,
    stepBody: "このまま作業を進めてQRコードを発行します。"
  },
  {
    stepId: 3,
    stepHeader: "駅などのPUDOロッカーへ持っていく",
    stepImagePath: ReturnAssetPath.tutorialPudoIconSend,
    stepBody: "駅前など各地にあるPUDOロッカーに荷物を持っていきます。"
  },
  {
    stepId: 4,
    stepHeader: "手続きをしてお荷物を入れます",
    stepImagePath: ReturnAssetPath.tutorialPudoIconLocker,
    stepBody:
      "端末で返却お手続きを完了させてお荷物をロッカーに入れて完了します。"
  }
];

/**
 * 各返却方法のチュートリアル注意事項ステップ別項目
 * @stepId {number}
 * @stepHeader {string}
 * @stepImagePath {string}
 * @stepBody {string}
 */
export const ReturnTutorialList = {
  FamilyMart,
  SevenEleven,
  YamatoShuka,
  YamatoSend,
  Pudo
};
