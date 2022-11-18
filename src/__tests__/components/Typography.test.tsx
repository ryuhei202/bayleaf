import { render, screen } from "@testing-library/react";
import { Typography } from "../../components/baseParts/legacy/Typography";

test("サイズが2xlの場合にclassにtext-2xlがある", () => {
  const { container } = render(
    <Typography size="2xl">Hello world!!</Typography>
  );
  expect(container?.firstChild).toHaveClass("text-2xl");
});
