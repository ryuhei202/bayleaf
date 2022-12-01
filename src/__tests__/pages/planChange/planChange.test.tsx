import { render, screen } from "@testing-library/react";
import { PlanSelecting } from "../../../components/pageParts/planChange/PlanSelecting";
import { ChartIndexMock } from "../../../mocks/charts/ChartIndexMock";
import { MemberIndexMock } from "../../../mocks/members/MemberIndexMock";
import { server } from "../../../mocks/server";
import { PlanChange } from "../../../pages/planChange/PlanChange";
import { PlanSelectingContainer } from "../../../pages/planChange/PlanSelectingContainer";
import { createQueryWrapper } from "../../utils/reactQuery";

const { queryWrapper } = createQueryWrapper();
describe("PlanChange.tsx", () => {
  test("メンバー情報とヒアリング済みカルテのFetch完了でコンテナ層に移動", async () => {
    server.use(
      ChartIndexMock({
        status: 200,
        response: {
          charts: [],
        },
      })
    );
    server.use(
      MemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "kiizan@example.com",
            nextPaymentDate: "11-1",
            mPlanId: 1,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
          },
        ],
      })
    );
    const { findByText } = render(<PlanChange />, {
      wrapper: queryWrapper,
    });

    expect(await findByText("ライト")).toBeInTheDocument();
    expect(await findByText("スタンダード")).toBeInTheDocument();
    expect(await findByText("プレミアム")).toBeInTheDocument();
    expect(await findByText("このプランに変更する")).toBeInTheDocument();
  });

  test("GET /chartsがエラーの場合、バリデーションをする", async () => {
    server.use(
      ChartIndexMock({
        status: 200,
        response: {
          charts: [],
        },
      })
    );
    server.use(MemberIndexMock({ status: 500 }));
    const { findByText } = render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("GET /membersがエラーの場合、バリデーションをする", async () => {
    server.use(
      ChartIndexMock({
        status: 200,
        response: {
          charts: [],
        },
      })
    );
    server.use(MemberIndexMock({ status: 500 }));
    const { findByText } = render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("GET _membersとGET /charts両方500エラーの場合、バリデーションをする", async () => {
    server.use(ChartIndexMock({ status: 500 }));
    server.use(MemberIndexMock({ status: 500 }));
    const { findByText } = render(<PlanChange />, { wrapper: queryWrapper });
    expect(
      await findByText("予期せぬエラーが発生しました")
    ).toBeInTheDocument();
  });

  test("ユーザーが複数いる場合、バリデーションをする", async () => {
    server.use(
      ChartIndexMock({
        status: 200,
        response: {
          charts: [],
        },
      })
    );
    server.use(
      MemberIndexMock({
        status: 200,
        response: [
          {
            id: 1,
            email: "kiizan@example.com",
            nextPaymentDate: "11-1",
            mPlanId: 1,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
          },
          {
            id: 3,
            email: "kiizan+2@example.com",
            nextPaymentDate: "11-1",
            mPlanId: 1,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: true,
            isSuspend: false,
          },
        ],
      })
    );
    const { findByText } = render(<PlanChange />, { wrapper: queryWrapper });
    expect(await findByText("ユーザーが複数人います。")).toBeInTheDocument();
  });
});

describe("PlanSelectingContainer.tsx", () => {
  beforeEach(() =>
    Object.defineProperty(window, "location", {
      value: {
        href: "http://example.com",
      },
    })
  );

  server.use(
    ChartIndexMock({
      status: 200,
      response: { charts: [] },
    })
  );
  server.use(
    MemberIndexMock({
      status: 200,
      response: [
        {
          id: 1,
          email: "kiizan@example.com",
          nextPaymentDate: "11-1",
          mPlanId: 1,
          isLatestChartDelivered: true,
          isReturnRequired: false,
          isFirstTime: true,
          isSuspend: false,
        },
      ],
    })
  );
  test("ローディングがある", () => {
    const { container } = render(
      <PlanSelecting planId={1} onSubmit={() => {}} isLoading={true} />,
      { wrapper: queryWrapper }
    );
    expect(container.getElementsByClassName("ui active loader").length).toEqual(
      1
    );
  });

  test("[初回ユーザー] && [停止じゃない] && [カルテがない場合]はプラン選択ページへ", async () => {
    render(
      <PlanSelectingContainer
        memberData={{
          id: 0,
          email: "",
          nextPaymentDate: "",
          mPlanId: 1,
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
          id: 0,
          email: "",
          nextPaymentDate: "",
          mPlanId: 1,
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
          id: 0,
          email: "",
          nextPaymentDate: "",
          mPlanId: 1,
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
          id: 0,
          email: "",
          nextPaymentDate: "",
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
              rentalStatus: 4,
              rentalStartedAt: "2022-1-11",
              itemImagePaths: ["", ""],
              planName: "プレミアム",
              planId: 1,
            },
          ],
        }}
      />,
      { wrapper: queryWrapper }
    );
    expect(await screen.findByText("リダイレクト中...")).toBeInTheDocument();
  });
});
