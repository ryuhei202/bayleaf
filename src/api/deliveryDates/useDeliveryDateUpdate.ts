import { usePatchRequest } from "../usePatchRequest";
import { TChartDeliveryDateResponse } from "./TChartDeliveryDateResponse";

type TChartDeliveryDate = {
  readonly data?: TChartDeliveryDateResponse;
  readonly error: Error | null;
};

type TArgs = {
  chartId: number;
  delivery_date: string | null;
  shipment_date: string | null;
  time: number;
};
type TParams = Omit<TArgs, "chartId">;

export const useDeliveryDateUpdates = ({
  chartId,
  delivery_date,
  shipment_date,
  time,
}: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/charts/${chartId}/delivery_date`,
    { delivery_date, shipment_date, time }
  );
  return {
    mutate,
    isLoading,
  };
};
