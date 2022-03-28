import { ReturnSelectItemViewData } from "../viewData/ReturnSelectItemViewData";
import { ReturnReserveType } from "../../shared/ReturnReserveType";
import { ReturnReserveViewData } from "../../reserve/viewData/ReturnReserveViewData";
import { ReturnAssetPath } from "../../../../../model/liff/shared/assets/ReturnAssetPath";

export interface ReturnSelectPresenter {
  selectItemViewDatas: () => ReturnSelectItemViewData[];
  returnReserveViewData: () => ReturnReserveViewData;
}

export const useReturnSelectPresenter = (
  selectedReserveType: ReturnReserveType | null
): ReturnSelectPresenter => {
  // ----------------------------------------
  // Data
  // ----------------------------------------
  /**
   * 返却選択方法のデータ
   */
  const returnReserveTypes: ReturnReserveType[] = [
    ReturnReserveType.FamilyMart,
    ReturnReserveType.SevenEleven,
    ReturnReserveType.YamatoSend,
    ReturnReserveType.YamatoShuka,
    ReturnReserveType.Pudo
  ];

  // ----------------------------------------
  // Public
  // ----------------------------------------
  /**
   * ViewDataの生成
   */
  const selectItemViewDatas = (): ReturnSelectItemViewData[] => {
    return returnReserveTypes.map(reserveType => {
      return {
        returnReserveType: reserveType,
        imgSrc: logoImagePath(reserveType),
        imgName: selectImageName(reserveType)
      };
    });
  };

  /**
   * ReturnReserveViewDataを生成
   */
  const returnReserveViewData = (): ReturnReserveViewData => {
    // ルーティング嬢はselectedReserveTypeがnullでくることはない
    // ただ設計上はnull考慮が必要なのでnullの場合には適当な初期値を与える、という逃げ方
    const reservedType =
      selectedReserveType !== null
        ? selectedReserveType
        : ReturnReserveType.FamilyMart;
    return {
      logoImagePath: logoImagePath(reservedType),
      messageBeforeHighlight: messageBeforeHighlight(reservedType),
      messageHighlight: messageHighlight(reservedType),
      messageAfterHighlight: messageAfterHighlight(reservedType),
      highLightColor: highLightColor(reservedType),
      reserveButtonTitle: reserveButtonTitle(reservedType),
      returnReserveType: reservedType
    };
  };

  // ----------------------------------------
  // Private
  // ----------------------------------------
  /**
   * 画像名称
   * @param returnReserveType 予約タイプ
   */
  const selectImageName = (returnReserveType: ReturnReserveType): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "ファミリーマート";
      case ReturnReserveType.SevenEleven:
        return "セブンイレブン";
      case ReturnReserveType.YamatoSend:
        return "ヤマト営業所持ち込み";
      case ReturnReserveType.YamatoShuka:
        return "ヤマト集荷";
      case ReturnReserveType.Pudo:
        return "PUDOステーション";
    }
  };

  /**
   * ロゴイメージのパスを返す
   */
  const logoImagePath = (returnReserveType: ReturnReserveType): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return ReturnAssetPath.iconFamilyMart;
      case ReturnReserveType.SevenEleven:
        return ReturnAssetPath.iconSevenEleven;
      case ReturnReserveType.YamatoSend:
        return ReturnAssetPath.iconYamato;
      case ReturnReserveType.YamatoShuka:
        return ReturnAssetPath.iconYamato;
      case ReturnReserveType.Pudo:
        return ReturnAssetPath.iconPudo;
    }
  };

  /**
   * ハイライトテキストの出し分け - ハイライトの前部分
   */
  const messageBeforeHighlight = (
    returnReserveType: ReturnReserveType
  ): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "お近くのファミリーマートにあります";
      case ReturnReserveType.SevenEleven:
        return "お近くの";
      case ReturnReserveType.YamatoSend:
        return "お近くの";
      case ReturnReserveType.YamatoShuka:
        return "お近くの";
      case ReturnReserveType.Pudo:
        return "お近くの";
    }
  };

  /**
   * ハイライトテキストの出し分け - ハイライトの部分
   */
  const messageHighlight = (returnReserveType: ReturnReserveType): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "Famiポート";
      case ReturnReserveType.SevenEleven:
        return "セブンイレブン";
      case ReturnReserveType.YamatoSend:
        return "ヤマト営業所";
      case ReturnReserveType.YamatoShuka:
        return "ヤマト自宅集荷";
      case ReturnReserveType.Pudo:
        return "PUDOステーション";
    }
  };

  /**
   * ハイライトテキストの出し分け - ハイライトの後部分
   */
  const messageAfterHighlight = (
    returnReserveType: ReturnReserveType
  ): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "にて返却お手続きが可能となっております。";
      case ReturnReserveType.SevenEleven:
        return "からの返却お手続きが可能となっております。";
      case ReturnReserveType.YamatoSend:
        return "にて持ち込みで返却お手続きが可能となっております。";
      case ReturnReserveType.YamatoShuka:
        return "での返却が可能となっております。";
      case ReturnReserveType.Pudo:
        return "からの返却お手続きが可能となっております。";
    }
  };

  /**
   * ハイライトテキストのカラー指定
   */
  const highLightColor = (returnReserveType: ReturnReserveType): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "#5A8BBE";
      case ReturnReserveType.SevenEleven:
        return "#F08300";
      case ReturnReserveType.YamatoSend:
        return "#F2BA00";
      case ReturnReserveType.YamatoShuka:
        return "#F2BA00";
      case ReturnReserveType.Pudo:
        return "#6EB334";
    }
  };

  /**
   * 返却にすすむ予約ボタンのテキスト出し分け
   */
  const reserveButtonTitle = (returnReserveType: ReturnReserveType): string => {
    switch (returnReserveType) {
      case ReturnReserveType.FamilyMart:
        return "返却用QRコードを発行する";
      case ReturnReserveType.SevenEleven:
        return "返却用バーコードを発行する";
      case ReturnReserveType.YamatoSend:
        return "返却用QRコードを発行する";
      case ReturnReserveType.YamatoShuka:
        return "集荷日時を指定する";
      case ReturnReserveType.Pudo:
        return "返却用QRコードを発行する";
    }
  };

  return { selectItemViewDatas, returnReserveViewData };
};
