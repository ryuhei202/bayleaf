import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { useGetRequest } from "../useGetRequest";
import { TChartIndexResponse } from "./TChartIndexResponse";

type TChartIndex = {
  readonly data?: TChartIndexResponse;
  readonly error: Error | null;
};

export type TChartIndexParams = {
  readonly rentalStatus: CHART_RENTAL_STATUS[];
};

type TChartIndexArgs = { params: TChartIndexParams };

export const useChartIndex = ({ params }: TChartIndexArgs): TChartIndex => {
  const { data, error } = useGetRequest<TChartIndexResponse, TChartIndexParams>(
    "charts",
    params
  );

  return {
    data,
    error,
  };
};
