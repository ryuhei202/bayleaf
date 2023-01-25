import { render, screen, waitFor } from "@testing-library/react";
import { getMemberIndexMock } from "../../../mocks/members/getMemberIndexMock";
import { server } from "../../../mocks/server";
import { PREMIUM_PLAN } from "../../../models/shared/Plans";
import { Unsuspend } from "../../../pages/unsuspend/Unsuspend";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper } = createQueryWrapper();

describe("Unsuspend.tsx", () => {
  beforeAll(() => {
    Object.defineProperty(window, "location", {
      writable: true,
      value: { assign: jest.fn() },
    });
  });
  test("停止かつレンタル残数0かつ決済エラーではないユーザーに対してUnsuspendContainer.tsxが表示される", async () => {
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
            rentalRemainingNum: 0,
            requestedPlanId: null,
          },
        ],
      })
    );

    render(<Unsuspend />, { wrapper: queryWrapper });

    expect(await screen.findByTestId("UnsuspendContainer")).toBeInTheDocument();
  });
  test("決済エラーユーザーはマイページにリダイレクトされる", async () => {
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
            rentalRemainingNum: 0,
            requestedPlanId: null,
          },
        ],
      })
    );

    render(<Unsuspend />, { wrapper: queryWrapper });
    await waitFor(() => {
      expect(location.assign).toBeCalledWith(
        `${process.env.REACT_APP_HOST_URL}/unsuspend`
      );
    });
  });
  test("レンタル残数1ユーザーはマイページにリダイレクトされる", async () => {
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
            requestedPlanId: null,
          },
        ],
      })
    );

    render(<Unsuspend />, { wrapper: queryWrapper });

    await waitFor(() => {
      expect(location.assign).toBeCalledWith(
        `${process.env.REACT_APP_HOST_URL}/unsuspend`
      );
    });
  });
  test("アクティブユーザーはマイページにリダイレクトされる", async () => {
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
            rentalRemainingNum: 0,
            requestedPlanId: null,
          },
        ],
      })
    );

    render(<Unsuspend />, { wrapper: queryWrapper });

    await waitFor(() => {
      expect(location.assign).toBeCalledWith(
        `${process.env.REACT_APP_HOST_URL}/unsuspend`
      );
    });
  });

  test("ユーザーが複数人いる場合はバリデーションをする", async () => {
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
            rentalRemainingNum: 0,
            requestedPlanId: null,
          },
          {
            id: 2,
            email: "stg-replication@kiizan-kiizan.co,jp",
            nextPaymentDate: "2022-11-1",
            mPlanId: PREMIUM_PLAN.id,
            isLatestChartDelivered: true,
            isReturnRequired: false,
            isFirstTime: false,
            isSuspend: true,
            isPaymentError: false,
            rentalRemainingNum: 0,
            requestedPlanId: null,
          },
        ],
      })
    );

    render(<Unsuspend />, { wrapper: queryWrapper });

    expect(
      await screen.findByTestId("ValidationForMultpleMember")
    ).toBeInTheDocument();
  });
});
