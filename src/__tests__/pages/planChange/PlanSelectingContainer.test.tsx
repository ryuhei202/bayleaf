import { render, screen } from "@testing-library/react";
import { CHART_RENTAL_STATUS } from "../../../models/chart/ChartRentalStatus";
import { PREMIUM_PLAN } from "../../../models/shared/Plans";
import { PlanSelectingContainer } from "../../../pages/planChange/PlanSelectingContainer";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper } = createQueryWrapper();

describe("PlanSelectingContainer.tsx", () => {
  test("[初回ユーザー] && [停止じゃない] && [カルテがない場合]はプラン選択ページへ", async () => {
    render(
      <PlanSelectingContainer
        memberData={{
          id: 1,
          email: "stg-replication+1@kiizan-kiizan.co,jp",
          nextPaymentDate: "2022-11-1",
          mPlanId: PREMIUM_PLAN.id,
          isLatestChartDelivered: false,
          isReturnRequired: false,
          isFirstTime: true,
          isSuspend: false,
        }}
        chartsData={{
          charts: [],
        }}
      />,
      { wrapper: queryWrapper }
    );

    expect(await screen.findByText("ライト")).toBeInTheDocument();
    expect(await screen.findByText("スタンダード")).toBeInTheDocument();
    expect(await screen.findByText("プレミアム")).toBeInTheDocument();
  });
  test("[初回ユーザー]でない場合はエラー", async () => {
    render(
      <PlanSelectingContainer
        memberData={{
          id: 1,
          email: "stg-replication+1@kiizan-kiizan.co,jp",
          nextPaymentDate: "2022-11-1",
          mPlanId: PREMIUM_PLAN.id,
          isLatestChartDelivered: false,
          isReturnRequired: false,
          isFirstTime: false,
          isSuspend: false,
        }}
        chartsData={{
          charts: [],
        }}
      />,
      { wrapper: queryWrapper }
    );
    expect(await screen.findByText("リダイレクト中...")).toBeInTheDocument();
  });
  test("[停止ユーザー]の場合はエラー", async () => {
    render(
      <PlanSelectingContainer
        memberData={{
          id: 1,
          email: "stg-replication+1@kiizan-kiizan.co,jp",
          nextPaymentDate: "2022-11-1",
          mPlanId: PREMIUM_PLAN.id,
          isLatestChartDelivered: false,
          isReturnRequired: false,
          isFirstTime: false,
          isSuspend: true,
        }}
        chartsData={{
          charts: [],
        }}
      />,
      { wrapper: queryWrapper }
    );
    expect(await screen.findByText("リダイレクト中...")).toBeInTheDocument();
  });
  test("[カルテがある場合]はエラー", async () => {
    render(
      <PlanSelectingContainer
        memberData={{
          id: 1,
          email: "stg-replication+1@kiizan-kiizan.co,jp",
          nextPaymentDate: "2022-11-1",
          mPlanId: 1,
          isLatestChartDelivered: false,
          isReturnRequired: false,
          isFirstTime: true,
          isSuspend: false,
        }}
        chartsData={{
          charts: [
            {
              id: 1,
              rentalStatus: CHART_RENTAL_STATUS.WAIT_HEARING,
              rentalStartedAt: "2022-1-11",
              itemImagePaths: ["", ""],
              planName: PREMIUM_PLAN.jpName,
              planId: PREMIUM_PLAN.id,
            },
          ],
        }}
      />,
      { wrapper: queryWrapper }
    );
    expect(await screen.findByText("リダイレクト中...")).toBeInTheDocument();
  });
});
