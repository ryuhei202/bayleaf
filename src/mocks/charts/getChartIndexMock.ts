import { rest } from "msw";
import { TChartIndexResponse } from "../../api/charts/TChartIndexResponse";

type TProps = {
  status: number;
  response?: TChartIndexResponse;
};

export const getChartIndexMock = ({ status, response }: TProps) => {
  return rest.get(
    `${process.env.REACT_APP_HOST_URL}/leeaf/charts`,
    (req, res, ctx) => {
      return res.once(ctx.status(status), ctx.json(response));
    }
  );
};
