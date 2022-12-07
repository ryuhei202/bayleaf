import { render, screen } from "@testing-library/react";
import { getMemberIndexMock } from "../../../mocks/members/getMemberIndexMock";
import { server } from "../../../mocks/server";
import { PREMIUM_PLAN } from "../../../models/shared/Plans";
import { Unsuspend } from "../../../pages/unsuspend/Unsuspend";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper } = createQueryWrapper();

describe("Unsuspend.tsx", () => {
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
          },
        ],
      })
    );

    jest.spyOn(window.location, "assign").mockImplementationOnce(() => {});

    render(<Unsuspend />, { wrapper: queryWrapper });

    expect(location.assign).toBeCalledWith(
      `${process.env.REACT_APP_HOST_URL}/unsuspend`
    );
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
          },
        ],
      })
    );

    jest.spyOn(window.location, "assign").mockImplementationOnce(() => {});

    render(<Unsuspend />, { wrapper: queryWrapper });

    expect(location.assign).toBeCalledWith(
      `${process.env.REACT_APP_HOST_URL}/unsuspend`
    );
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
          },
        ],
      })
    );

    jest.spyOn(window.location, "assign").mockImplementationOnce(() => {});

    render(<Unsuspend />, { wrapper: queryWrapper });

    expect(location.assign).toBeCalledWith(
      `${process.env.REACT_APP_HOST_URL}/unsuspend`
    );
  });
});
