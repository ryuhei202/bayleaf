import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { TNotNullPlanIdMember } from "../../../api/members/TMembersIndexResponse";
import { getHearingFormShowMock } from "../../../mocks/hearingForms/getHearingFormShowMock";
import { server } from "../../../mocks/server";
import { M_PLAN_IDS } from "../../../models/shared/Plans";
import { NewHearingContainer } from "../../../pages/hearing/NewHearingContainer";
import { createQueryWrapper } from "../../utils/MockProvider";

const { queryWrapper: QueryWrapper } = createQueryWrapper();
const AllTheProviders = ({
  children,
}: {
  children: React.ReactElement;
}): ReactElement => {
  return (
    <BrowserRouter>
      <QueryWrapper>{children}</QueryWrapper>
    </BrowserRouter>
  );
};

const createMember = (mPlanId: number): TNotNullPlanIdMember => {
  return {
    id: 1,
    email: "stg-replication@kiizan-kiizan.co,jp",
    nextPaymentDate: "2022-11-1",
    mPlanId,
    isLatestChartDelivered: true,
    isReturnRequired: false,
    isFirstTime: true,
    isSuspend: false,
    isPaymentError: false,
    rentalRemainingNum: 1,
    requestedPlanId: null,
    point: 2000,
  };
};

const createHearingFormResponse = () => {
  return {
    id: 1,
    categoryId: 1,
    categoryName: "使いたいシーン",
    multipleAnswerNextFormId: null,
    title: "借りたコーデをどちらの予定で使いますか？",
    options: [
      {
        id: 1,
        name: "日常の予定",
        nextFormId: null,
        isText: false,
        isSingleAnswer: true,
      },
    ],
  };
};

describe("NewHearingContainer.tsx", () => {
  test("ライトプランで全てのヒアリングに回答し終えたら、RankSelectingFormが表示される", async () => {
    // Arrange
    server.use(
      getHearingFormShowMock({
        status: 200,
        hearingFormId: 1,
        response: createHearingFormResponse(),
      })
    );
    // Act
    render(
      <NewHearingContainer
        nextPlanId={M_PLAN_IDS.LIGHT}
        member={createMember(M_PLAN_IDS.LIGHT)}
      />,
      {
        wrapper: AllTheProviders,
      }
    );
    const user = userEvent.setup();

    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();
    // ヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(await screen.findByTestId("startHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームを戻るボタンをクリックしたら、ヒアリングスタート画面に戻る
    user.click(screen.getByTestId("rankFormBackBtnLabel"));
    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();

    // ヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(await screen.findByTestId("startHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームでAランクを選択して次へボタンをクリックしたら、確認画面が表示される
    user.click(await screen.findByText("Aランクでコーデを作ってほしい"));
    user.click(await screen.findByText("次へ"));
    expect(
      await screen.findByTestId("hearingAnswerConfirm")
    ).toBeInTheDocument();
    expect(await screen.findByText("希望しない")).toBeInTheDocument();

    // 確認画面の戻るボタンをクリックしたら、ランク選択フォームが表示される
    user.click(await screen.findByText("ひとつ前に戻る"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();
  });

  test("スタンダードプランで全てのヒアリングに回答し終えたら、RankSelectingFormが表示される", async () => {
    // Arrange
    server.use(
      getHearingFormShowMock({
        status: 200,
        hearingFormId: 1,
        response: createHearingFormResponse(),
      })
    );
    // Act
    render(
      <NewHearingContainer
        nextPlanId={M_PLAN_IDS.SRTANDARD}
        member={createMember(M_PLAN_IDS.SRTANDARD)}
      />,
      {
        wrapper: AllTheProviders,
      }
    );
    const user = userEvent.setup();

    // 最初のレンダリングでヒアリングスタート画面が表示される
    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();

    // ヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(await screen.findByTestId("startHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームを戻るボタンをクリックしたら、ヒアリングスタート画面に戻る
    user.click(screen.getByTestId("rankFormBackBtnLabel"));
    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();

    // ヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(await screen.findByTestId("startHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームでAランクを選択して次へボタンをクリックしたら、確認画面が表示される
    user.click(await screen.findByText("Aランクでコーデを作ってほしい"));
    user.click(await screen.findByText("次へ"));
    expect(
      await screen.findByTestId("hearingAnswerConfirm")
    ).toBeInTheDocument();
    expect(await screen.findByText("希望しない")).toBeInTheDocument();

    // 確認画面の戻るボタンをクリックしたら、ランク選択フォームが表示される
    user.click(await screen.findByText("ひとつ前に戻る"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();
  });

  test("プレミアムプランで全てのヒアリングに回答し終えたら、RankSelectingFormが表示される", async () => {
    // Arrange
    server.use(
      getHearingFormShowMock({
        status: 200,
        hearingFormId: 1,
        response: createHearingFormResponse(),
      })
    );
    // Act
    render(
      <NewHearingContainer
        nextPlanId={M_PLAN_IDS.PREMIUM}
        member={createMember(M_PLAN_IDS.PREMIUM)}
      />,
      {
        wrapper: AllTheProviders,
      }
    );
    const user = userEvent.setup();

    // 最初のレンダリングでヒアリングスタート画面が表示される
    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();

    // ヒアリングを開始するボタンをクリックしたら、ヒアリング二回目選択画面が表示される
    user.click(screen.getByTestId("startHearingLabel"));
    expect(await screen.findByTestId("premiumPlanConfirm")).toBeInTheDocument();

    // プレミアムプランのヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(screen.getByTestId("nextHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームを戻るボタンをクリックしたら、ヒアリング二回目選択画面に戻る
    user.click(screen.getByTestId("rankFormBackBtnLabel"));
    expect(await screen.findByTestId("premiumPlanConfirm")).toBeInTheDocument();

    // プレミアムプランのヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(screen.getByTestId("nextHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームでAランクを選択して次へボタンをクリックしたら、確認画面が表示される
    user.click(await screen.findByText("Aランクでコーデを作ってほしい"));
    user.click(await screen.findByText("次へ"));
    expect(
      await screen.findByTestId("hearingAnswerConfirm")
    ).toBeInTheDocument();
    expect(await screen.findByText("希望しない")).toBeInTheDocument();
  });

  test("Bランクアイテムが選択できる", async () => {
    // Arrange
    server.use(
      getHearingFormShowMock({
        status: 200,
        hearingFormId: 1,
        response: createHearingFormResponse(),
      })
    );
    // Act
    render(
      <NewHearingContainer
        nextPlanId={M_PLAN_IDS.LIGHT}
        member={createMember(M_PLAN_IDS.LIGHT)}
      />,
      {
        wrapper: AllTheProviders,
      }
    );
    const user = userEvent.setup();

    expect(
      await screen.findByTestId("beforeHearingConfirm")
    ).toBeInTheDocument();
    // ヒアリングを開始するボタンをクリックしたら、ランク画面が表示される
    user.click(await screen.findByTestId("startHearingLabel"));
    expect(await screen.findByTestId("rankSelectingForm")).toBeInTheDocument();

    // ランク選択フォームでBランクを選択して次へボタンをクリックしたら、確認画面が表示される
    const textMatcher = (content: string) => {
      return (
        content.startsWith("Bランクアイテムがあれば、") &&
        content.includes("Bランク混合でコーデを作ってほしい")
      );
    };

    user.click(await screen.findByText(textMatcher));
    user.click(await screen.findByText("次へ"));
    expect(
      await screen.findByTestId("hearingAnswerConfirm")
    ).toBeInTheDocument();
    expect(await screen.findByText("希望する")).toBeInTheDocument();
  });
});
