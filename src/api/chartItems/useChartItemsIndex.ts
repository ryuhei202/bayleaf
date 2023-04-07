import { TItemResponse } from "../shared/TItemResponse";
import { useGetRequest } from "../useGetRequest";

type TArgs = {
  readonly chartId: number;
};

export const useChartItemsIndex = ({ chartId }: TArgs) => {
  const { data, error } = useGetRequest<TItemResponse[]>(
    `charts/${chartId}/chart_items`
  );
  return {
    data,
    error,
  };
};
