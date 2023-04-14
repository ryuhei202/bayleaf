import { rest } from "msw";
import { TChartItemsIndexResponse } from "../../api/chartItems/TChartItemsIndexResponse";

type TProps = {
  status: number;
  response?: TChartItemsIndexResponse[];
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
