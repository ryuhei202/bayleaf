import { rest } from "msw";
import { TItemResponse } from "../../api/shared/TItemResponse";

type TProps = {
  status: number;
  response?: TItemResponse[];
  chartId: number;
};

export const getChartItemIndexMock = ({
  status,
  response,
  chartId,
}: TProps) => {
  return rest.get(
    `${process.env.REACT_APP_HOST_URL}/leeaf/charts/${chartId}/chart_items`,
    (_req, res, ctx) => {
      return res.once(ctx.status(status), ctx.json(response));
    }
  );
};
