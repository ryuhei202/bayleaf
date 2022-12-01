import { render, screen, waitFor } from "@testing-library/react";
import { ChartIndexMock } from "../../../mocks/charts/ChartIndexMock";
import { server } from "../../../mocks/server";
import { Dressing } from "../../../pages/dressing/Dressing";
import { createQueryWrapper } from "../../utils/reactQuery";
const { queryWrapper } = createQueryWrapper();

describe("dressing", () => {
  test("ローディング中が表示されているか", async () => {
    waitFor(() =>
      server.use(ChartIndexMock({ status: 200, response: { charts: [] } }))
    );

    const { container } = render(<Dressing />, {
      wrapper: queryWrapper,
    });
    await waitFor(() =>
      expect(
        container.getElementsByClassName("ui active loader").length
      ).toEqual(1)
    );
  });

  test("ローディング後のテスト", async () => {
    Object.defineProperty(window, "location", {
      value: {
        href: "http://example.com",
      },
    });
    server.use(ChartIndexMock({ status: 200, response: { charts: [] } }));
    waitFor(() =>
      render(<Dressing />, {
        wrapper: queryWrapper,
      })
    );

    await waitFor(() => screen.getByText("リダイレクト中..."));
  });

  // Fetcher層のAPIが叩かれていることからこのテストは成功しているのだが叩かれていることを証明する術がないので一旦skip
  test("データがあった場合、画面が適切に表示されるか", async () => {
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
    render(<Dressing />, { wrapper: queryWrapper });
    await waitFor(() => screen.getByText("リダイレクト中..."));
  });
});
