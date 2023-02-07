export type TMembersIndexResponse = {
  readonly id: number;
  readonly email: string;
  readonly nextPaymentDate: string;
  readonly mPlanId: number;
  readonly isLatestChartDelivered: boolean;
  readonly isReturnRequired: boolean;
  readonly isFirstTime: boolean;
  readonly isSuspend: boolean;
  readonly isPaymentError: boolean;
  readonly rentalRemainingNum: number;
  readonly requestedPlanId: number | null;
};
