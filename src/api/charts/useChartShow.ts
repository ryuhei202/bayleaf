import { useGetRequest } from "../useGetRequest";
import { TChartShowResponse } from "./TChartShowResponse";

type TChartShow = {
  readonly data?: TChartShowResponse;
  readonly error: Error | null;
};
type TChartShowArgs = {
  readonly chartId: number;
};

export const useChartShow = ({ chartId }: TChartShowArgs): TChartShow => {
  const { data, error } = useGetRequest<TChartShowResponse>(
    `charts/${chartId}`
  );

  return {
    data,
    error,
  };
};
