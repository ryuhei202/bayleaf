import { useDeliveryDateShow } from "../../api/deliveryDates/useDeliveryDateShow";
import { Loader } from "semantic-ui-react";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { DeliveryInputs } from "../../components/delivery/DeliveryInputs";
type Props = {
  chartId: number;
  nextPaymentsDate: string;
};
export const DeliveryForm = ({ chartId, nextPaymentsDate }: Props) => {
  const { data: deliveryDateShowData, error: deliveryDateShowError } =
    useDeliveryDateShow({
      chartId,
    });

  if (deliveryDateShowError)
    return <ErrorMessage message={deliveryDateShowError.message} />;
  if (!deliveryDateShowData) return <Loader active />;
  const isSelectableDatePresent =
    deliveryDateShowData.selectableDatePeriod !== null;
  const isDiscountDatePresent =
    deliveryDateShowData.discountSelectableDatePeriod !== null;
  if (isSelectableDatePresent === false && isDiscountDatePresent === false) {
    return <ErrorMessage message="選択可能な日付がありません" />;
  }

  return (
    <DeliveryInputs
      chartId={chartId}
      deliveryDateShowData={deliveryDateShowData}
      nextPaymentsDate={nextPaymentsDate}
    />
  );
};
