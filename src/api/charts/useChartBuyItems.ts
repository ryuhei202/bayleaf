import { usePostRequest } from "../usePostRequest";
import { TChartBuyItemsParams } from "./TChartBuyItemsParams";

type TArgs = {
  chartId: number;
};
export const useChartBuyItems = ({ chartId }: TArgs) => {
  const { mutate, isLoading, isError, error } = usePostRequest<TChartBuyItemsParams>(
    `charts/${chartId}/buy_items`
  );

  return { mutate, isLoading, isError, error};
};
