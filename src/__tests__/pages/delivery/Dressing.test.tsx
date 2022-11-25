import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { Dressing } from "../../../pages/dressing/Dressing";
import { createQueryWrapper } from "../../utils/reactQuery";
const { queryWrapper, queryClient } = createQueryWrapper();
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe("dressing", () => {
  test("ローディング中が表示されているか", () => {
    const { container } = render(<Dressing />, { wrapper: queryWrapper });
    expect(container.getElementsByClassName("ui active loader").length).toEqual(
      1
    );
  });

  test("ローディング後のテスト", async () => {
    server.use(
      rest.get(`http://localhost:3000/leeaf/charts`, (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            charts: [],
          })
        );
      })
    );
    queryClient.setQueryData("charts", {
      charts: [
        {
          id: 1,
          rentalStatus: 2,
          rentalStartedAt: "11-1",
          itemImagePaths: ["./././"],
          planName: "プレミアム",
          planId: 0,
        },
      ],
    });

    const { container, debug } = render(<Dressing />, {
      wrapper: queryWrapper,
    });
    await waitFor(() => screen.getByText("予期せぬエラーが発生しました"));
    console.log(container);
    debug();
  });
});
