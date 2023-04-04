import { useGetRequest } from "../useGetRequest";
export type TChartItemsIndexResponse = {
  readonly id: number;
  readonly isPurchased: boolean;
  readonly brandName: string;
  readonly imagePaths: {
    original: string;
    large: string;
    largeThumb: string | null;
    thumb: string;
  };
  readonly categoryName: string;
  readonly colorName: string;
  readonly price: number;
  readonly discountedPrice: number;
  readonly point: number;
  readonly locationId: number | null;
  readonly discountRate: number;
  readonly isBuyable: boolean;
  readonly rank: string;
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
