import { TPlanIds, UWEAR_PLAN_IDS } from "../shared/Plans";

export enum CHART_RENTAL_STATUS {
  WAIT_HEARING = 1, // ヒアリング待ち
  WAIT_COORDE_REGIST = 2, // コーデ登録待ち
  WAIT_DELIVERY = 3, // 出荷待ち
  WAIT_RENTAL_RETURN = 4, // 返却待ち（レンタル中）
  WAIT_INSPECTION = 5, // 検品待ち（全品購入済み含み）
  WAIT_WAIT_REVIEW = 6, // レビュー待ち
}

// プラン変更ができないレンタルステータスを取得する
export const getRentalStatusesWithNoPlanChanges = ({
  planId,
}: {
  planId: TPlanIds;
}): number[] => {
  if (UWEAR_PLAN_IDS.includes(planId)) return [];

  return [
    CHART_RENTAL_STATUS.WAIT_COORDE_REGIST,
    CHART_RENTAL_STATUS.WAIT_DELIVERY,
    CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN,
    CHART_RENTAL_STATUS.WAIT_INSPECTION,
  ];
};
