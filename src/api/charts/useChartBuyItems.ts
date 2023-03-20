import { usePostRequest } from "../usePostRequest";
import { TChartBuyItemsParams } from "./TChartBuyItemsParams";

type TArgs = {
  chartId: number;
};
export const useChartBuyItems = ({ chartId }: TArgs) => {
  const { mutate, isLoading, isError, error, isSuccess } =
    usePostRequest<TChartBuyItemsParams>(`charts/${chartId}/buy_items`);

  return { mutate, isLoading, isError, error, isSuccess };
};
