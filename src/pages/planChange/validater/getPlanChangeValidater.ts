import * as Sentry from "@sentry/react";
import {
  CHART_RENTAL_STATUS,
  getRentalStatusesWithNoPlanChanges,
} from "../../../models/chart/ChartRentalStatus";
import { TChartIndexResponse } from "./../../../api/charts/TChartIndexResponse";
import { TMembersIndexResponse } from "./../../../api/members/TMembersIndexResponse";
type TArgs = {
  readonly membersData: TMembersIndexResponse[];
  readonly chartsData: TChartIndexResponse;
};
type TPlanChangeValidater = {
  readonly isStatusNotRentable: () => boolean;
  readonly isFirstUserPreparingCoordinate: boolean;
  readonly isSuspend: boolean;
  readonly isMultpleMembers: boolean;
  readonly isOneShotMember: boolean;
};

export const getPlanChangeValidater = ({
  membersData,
  chartsData,
}: TArgs): TPlanChangeValidater => {
  const isStatusNotRentable = (): boolean => {
    const planId = membersData[0].mPlanId;
    if (planId === null) {
      Sentry.captureException(
        "単発利用ユーザーがプラン変更ページにアクセスしています"
      );
      return false;
    }
    return chartsData.charts.some((c) =>
      getRentalStatusesWithNoPlanChanges({
        planId,
      }).includes(c.rentalStatus)
    );
  };

  const isFirstUserPreparingCoordinate =
    membersData[0].isFirstTime &&
    chartsData.charts.some((c) =>
      [
        CHART_RENTAL_STATUS.WAIT_HEARING,
        CHART_RENTAL_STATUS.WAIT_COORDE_REGIST,
        CHART_RENTAL_STATUS.WAIT_DELIVERY,
      ].includes(c.rentalStatus)
    );

  const isSuspend = !membersData[0] || membersData[0].isSuspend;

  const isMultpleMembers = membersData.length !== 1;

  const isOneShotMember = membersData[0].mPlanId === null;

  return {
    isStatusNotRentable,
    isFirstUserPreparingCoordinate,
    isSuspend,
    isMultpleMembers,
    isOneShotMember,
  };
};
