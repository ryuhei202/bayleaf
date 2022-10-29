import { useGetRequest } from "../useGetRequest";
import { TChartDeliveryDateResponse } from "./TChartDeliveryDateResponse";

type TChartDeliveryDate = {
  readonly data?: TChartDeliveryDateResponse;
  readonly error: Error | null;
};

type TChartDeliveryDateParams = {
  chartId?: number;
};

export const useDeliveryDateShow = ({
  chartId,
}: TChartDeliveryDateParams): TChartDeliveryDate => {
  const { data, error } = useGetRequest<TChartDeliveryDateResponse>(
    `charts/${chartId}/delivery_date`
  );
  return {
    data,
    error,
  };
};
