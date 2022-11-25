import { render, screen, waitFor } from "@testing-library/react";
import { ChartIndexMock } from "../../../mocks/charts/ChartIndexMock";
import { MemberIndexMock } from "../../../mocks/members/MemberIndexMock";
import { server } from "../../../mocks/server";
import { createQueryWrapper } from "../../utils/reactQuery";

const { queryWrapper } = createQueryWrapper();
describe("PlanChange.tsx", () => {
  server.use(
    ChartIndexMock({
      status: 200,
      response: {
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
      },
    })
  );
  server.use(
    MemberIndexMock({
      status: 200,
      response: {
        id: 1,
        email: "kiizan@example.com",
        nextPaymentDate: "11-1",
        mPlanId: 1,
        isLatestChartDelivered: true,
        isReturnRequired: false,
      },
    })
  );
  test("メンバー情報とヒアリング済みカルテのFetch完了でコンテナ層に移動", () => {
    // const { container } = render(<PlanChange />, {
    //   wrapper: queryWrapper,
    // });
    // expect(container.getElementsByClassName("ui active loader").length).toEqual(
    //   1
    // );
  });
  test("メンバー情報のみのFetch完了だとエラー", async () => {
    server.use(MemberIndexMock({ status: 500 }));
    // const { container } = render(<PlanChange />, {
    //   wrapper: queryWrapper,
    // });
    // await waitFor(() => screen.getByText("予期せぬエラーが発生しました"));
  });
  test("ヒアリング済みカルテのみのFetch完了だとエラー", () => {
    server.use(ChartIndexMock({ status: 500 }));
    // const { container } = render(<PlanChange />, {
    //   wrapper: queryWrapper,
    // });
    // await waitFor(() => screen.getByText("予期せぬエラーが発生しました"));
  });
  test("メンバー情報とヒアリング済みカルテの両方がFetchができない場合はエラー", () => {
    server.use(ChartIndexMock({ status: 500 }));
    server.use(MemberIndexMock({ status: 500 }));
    // const { container } = render(<PlanChange />, {
    //   wrapper: queryWrapper,
    // });
    // await waitFor(() => screen.getByText("予期せぬエラーが発生しました"));
  });
});

describe("PlanSelectingContainer.tsx", () => {
  test("ローディングがある", () => {});
  test("[初回ユーザー] && [停止じゃない] && [カルテがない場合]はプラン選択ページへ", () => {});
  test("[初回ユーザー]でない場合はエラー", () => {});
  test("[停止ユーザー]の場合はエラー", () => {});
  test("[カルテがある場合]はエラー", () => {});
});
