import { render, screen } from "@testing-library/react";
import { getChartIndexMock } from "../../../mocks/charts/getChartIndexMock";
import { getMemberIndexMock } from "../../../mocks/members/getMemberIndexMock";
import { server } from "../../../mocks/server";
import { PREMIUM_PLAN } from "../../../models/shared/Plans";
import { PlanChange } from "../../../pages/planChange/PlanChange";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper } = createQueryWrapper();

describe("PlanChange.tsx", () => {
  test("GET/membersとGET/chartsがリクエスト完了の場合。コンテナ層に移動", async () => {
    server.use(getChartIndexMock({ status: 200, response: { charts: [] } }));
    server.use(
      getMemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "stg-replication@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });

    expect(await screen.findByText("ライト")).toBeInTheDocument();
    expect(await screen.findByText("スタンダード")).toBeInTheDocument();
    expect(await screen.findByText("プレミアム")).toBeInTheDocument();
    expect(await screen.findByText("このプランに変更する")).toBeInTheDocument();
  });

  test("GET /chartsが500エラーの場合、バリデーションをする", async () => {
    server.use(getChartIndexMock({ status: 500 }));
    server.use(
      getMemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "stg-replication+1@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await screen.findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("GET /membersが500エラーの場合、バリデーションをする", async () => {
    server.use(getChartIndexMock({ status: 200, response: { charts: [] } }));
    server.use(getMemberIndexMock({ status: 500 }));
    render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await screen.findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("GET /membersとGET /charts両方500エラーの場合、バリデーションをする", async () => {
    server.use(getChartIndexMock({ status: 500 }));
    server.use(getMemberIndexMock({ status: 500 }));
    render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await screen.findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("ユーザーが複数いる場合、バリデーションをする", async () => {
    server.use(getChartIndexMock({ status: 200, response: { charts: [] } }));
    server.use(
      getMemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "stg-replication+1@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
          {
            id: 3,
            email: "stg-replication+3@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await screen.findByText("ユーザーが複数人います。")
    ).toBeInTheDocument();
  });
});
