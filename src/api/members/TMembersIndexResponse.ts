export type TMembersIndexResponse = {
  readonly id: number;
  readonly email: string;
  readonly nextPaymentDate: string | null;
  readonly mPlanId: number | null;
  readonly isLatestChartDelivered: boolean;
  readonly isReturnRequired: boolean;
  readonly isFirstTime: boolean;
  readonly isSuspend: boolean;
  readonly isPaymentError: boolean;
  readonly rentalRemainingNum: number;
  readonly requestedPlanId: number | null;
  readonly point: number;
};

// mPlanIdのnull許容をしない型
export type TNotNullPlanIdMember = PickProps<TMembersIndexResponse, "mPlanId">;

type RequiredNotNull<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

type PickProps<T, K extends keyof T> = T & RequiredNotNull<Pick<T, K>>;
