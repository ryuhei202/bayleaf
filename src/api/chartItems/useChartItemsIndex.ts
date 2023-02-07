import { useGetRequest } from "../useGetRequest";
type TChartItemsIndexResponse = {
  readonly id: number;
  readonly itemStatus: number;
  readonly brandName: string;
  readonly imagePaths: string[];
  readonly categoryName: string;
  readonly colorName: string;
  readonly referencePriceTaxIn: number;
  readonly priceTaxIn: number;
  readonly point: number;
  readonly locationId: number | null;
};

type TArgs = {
  readonly chartId: number;
};

export const useChartItemsIndex = ({ chartId }: TArgs) => {
  const { data, error } = useGetRequest<TChartItemsIndexResponse[]>(
    `charts/${chartId}/chart_items`
  );
  return {
    data,
    error,
  };
};
