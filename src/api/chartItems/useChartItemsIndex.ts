import { useGetRequest } from "../useGetRequest";
import { TChartItemsResponse } from "./TChartItemsIndexResponse";

type TArgs = {
  readonly chartId: number;
};

export const useChartItemsIndex = ({ chartId }: TArgs) => {
  const { data, error } = useGetRequest<TChartItemsResponse>(
    `charts/${chartId}/chart_items`
  );
  return {
    data,
    error,
  };
};
