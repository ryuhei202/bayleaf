import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { server } from "../../../mocks/server";
import { Dressing } from "../../../pages/dressing/Dressing";
import { createQueryWrapper } from "../../utils/reactQuery";
const { queryWrapper, queryClient } = createQueryWrapper();

describe("dressing", () => {
  server.use(
    rest.get(
      `${process.env.REACT_APP_HOST_URL}/leeaf/charts`,
      (req, res, ctx) => {
        return res(
          ctx.status(200),
          ctx.json({
            charts: [],
          })
        );
      }
    )
  );
  test("ローディング中が表示されているか", () => {
    const { debug, container } = render(<Dressing />, {
      wrapper: queryWrapper,
    });
    debug();
    expect(container.getElementsByClassName("ui active loader").length).toEqual(
      1
    );
  });

  test("ローディング後のテスト", async () => {
    const { container, debug } = render(<Dressing />, {
      wrapper: queryWrapper,
    });
    await waitFor(() => screen.getByText("リダイレクト中..."));
    debug();
  });
});
