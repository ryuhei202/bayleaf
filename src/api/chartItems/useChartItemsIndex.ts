import { useGetRequest } from "../useGetRequest";
import { TChartItemsIndexResponse } from "./TChartItemsIndexResponse";

type TArgs = {
  readonly chartId: number;
};

export const useChartItemsIndex = ({ chartId }: TArgs) => {
  const { data, error } = useGetRequest<TChartItemsIndexResponse>(
    `charts/${chartId}/chart_items`
  );
  return {
    data,
    error,
  };
};
