import { Loader } from "semantic-ui-react";
import { useDeliveryDateShow } from "../../api/deliveryDates/useDeliveryDateShow";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { DeliveryPageContainer } from "./DeliveryPageContainer";
type TProps = {
  chartIndexDataId: number;
  nextPaymentDate: string;
};

export const DeliveryFetcher = ({
  chartIndexDataId,
  nextPaymentDate,
}: TProps) => {
  const { data: deliveryDateShowData, error: deliveryDateShowError } =
    useDeliveryDateShow({
      chartId: chartIndexDataId,
    });
  if (deliveryDateShowError)
    return <ErrorMessage message={deliveryDateShowError.message} />;
  if (!deliveryDateShowData) return <Loader active />;

  const isSelectableDatePresent =
    deliveryDateShowData.selectableDatePeriod === null;

  const isDiscountDatePresent =
    deliveryDateShowData.discountSelectableDatePeriod === null;

  if (isSelectableDatePresent && isDiscountDatePresent) {
    return <ErrorMessage message="選択可能な日付がありません" />;
  }
  return (
    <DeliveryPageContainer
      chartId={chartIndexDataId}
      deliveryDateShowData={deliveryDateShowData}
      nextPaymentsDate={nextPaymentDate}
    />
  );
};
