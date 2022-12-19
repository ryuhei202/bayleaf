import { createMemoryHistory } from "@remix-run/router";
import { render, screen, waitFor } from "@testing-library/react";
import { getChartIndexMock } from "../../../mocks/charts/getChartIndexMock";
import { getMemberIndexMock } from "../../../mocks/members/getMemberIndexMock";
import { server } from "../../../mocks/server";
import { M_PLAN_IDS, PREMIUM_PLAN } from "../../../models/shared/Plans";
import { PlanChange } from "../../../pages/planChange/PlanChange";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper } = createQueryWrapper();

describe("PlanChange.tsx", () => {
  test("初回ユーザーの場合、PlanSelectingForPreMemberContainerに遷移", async () => {
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

    expect(
      await screen.findByTestId("PlanSelectingForPreMemberContainer")
    ).toBeInTheDocument();
  });

  test("二回目以降ユーザーの場合、PlanSelectingContainerに遷移", async () => {
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
            isFirstTime: false,
            isSuspend: false,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });

    expect(
      await screen.findByTestId("PlanSelectingContainer")
    ).toBeInTheDocument();
  });

  test("初回ユーザーでレンタル中の場合、PlanSelectingContainerに遷移", async () => {
    server.use(
      getChartIndexMock({
        status: 200,
        response: {
          charts: [
            {
              id: 1,
              rentalStatus: 4,
              rentalStartedAt: "2022/03/12",
              itemImagePaths: [
                "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
              ],
              planName: PREMIUM_PLAN.jpName,
              planId: PREMIUM_PLAN.id,
            },
          ],
        },
      })
    );
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

    expect(
      await screen.findByTestId("PlanSelectingContainer")
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

  test("決済エラー停止ユーザーの場合、バリデーションメッセージを表示する", async () => {
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
            isFirstTime: false,
            isSuspend: true,
            isPaymentError: true,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });

    expect(
      await screen.findByText(
        "決済エラーステータスのため、プラン変更できません"
      )
    ).toBeInTheDocument();
  });

  test("旧プラン利用でレンタル中ユーザーの場合、バリデーションメッセージを表示する", async () => {
    server.use(
      getChartIndexMock({
        status: 200,
        response: {
          charts: [
            {
              id: 1,
              rentalStatus: 4,
              rentalStartedAt: "2022/03/12",
              itemImagePaths: [
                "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
              ],
              planName: "カジュアルプラン",
              planId: M_PLAN_IDS.CASUAL,
            },
          ],
        },
      })
    );
    server.use(
      getMemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "stg-replication@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: M_PLAN_IDS.CASUAL,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: false,
            isSuspend: true,
            isPaymentError: true,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });

    expect(
      await screen.findByText("レンタル中のため、プラン変更できません")
    ).toBeInTheDocument();
  });

  test("初回ユーザーでコーデ登録待ちの場合、バリデーションメッセージを表示する", async () => {
    server.use(
      getChartIndexMock({
        status: 200,
        response: {
          charts: [
            {
              id: 1,
              rentalStatus: 2,
              rentalStartedAt: "2022/03/12",
              itemImagePaths: [
                "https://stg.leeap.jp/files/preregistered_item/168/16899/large_thumb_IMG_3977.JPG",
              ],
              planName: PREMIUM_PLAN.jpName,
              planId: PREMIUM_PLAN.id,
            },
          ],
        },
      })
    );
    server.use(
      getMemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "stg-replication@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: false,
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
      await screen.findByText("コーデ作成中のため、プラン変更できません")
    ).toBeInTheDocument();
  });

  test("停止ユーザーの場合、Unsuspend.tsxにリダイレクトする", async () => {
    const history = createMemoryHistory({ initialEntries: ["/plan_change"] });
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
            isFirstTime: false,
            isSuspend: true,
            isPaymentError: false,
            rentalRemainingNum: 1,
          },
        ],
      })
    );
    render(<PlanChange />, { wrapper: queryWrapper });

    await waitFor(() => {
      expect(history.location.pathname).toEqual("/unsuspend");
    });
  });

  test("GET /chartsが500エラーの場合、バリデーションをする", async () => {
    server.use(getChartIndexMock({ status: 500 }));
    server.use(getMemberIndexMock({ status: 200, response: [] }));
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
});
