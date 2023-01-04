import { usePatchRequest } from "../usePatchRequest";

type TArgs = {
  chartId: number;
  deliveryDate: string | null;
  shipmentDate: { min: string; max: string } | null;
  time: number;
};
type TParams = Omit<TArgs, "chartId">;

export const useDeliveryDateUpdate = ({
  chartId,
  deliveryDate,
  shipmentDate,
  time,
}: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/charts/${chartId}/delivery_date`,
    { deliveryDate, shipmentDate, time }
  );
  return {
    mutate,
    isLoading,
  };
};
