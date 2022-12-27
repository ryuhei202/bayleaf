import { useDeliveryDateShow } from "../../api/deliveryDates/useDeliveryDateShow";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { DeliveryPageContainer } from "./DeliveryPageContainer";
type TProps = {
  chartIndexDataId: number;
  rentalStatus: number;
  nextPaymentDate: string;
};

export const DeliveryFetcher = ({
  chartIndexDataId,
  rentalStatus,
  nextPaymentDate,
}: TProps) => {
  const { data: deliveryDateShowData, error: deliveryDateShowError } =
    useDeliveryDateShow({
      chartId: chartIndexDataId,
    });
  if (deliveryDateShowError)
    return <ErrorMessage message={deliveryDateShowError.message} />;
  if (!deliveryDateShowData) return <LoaderPage />;

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
      isReadOnly={[
        CHART_RENTAL_STATUS.WAIT_COORDE_REGIST,
        CHART_RENTAL_STATUS.WAIT_DELIVERY,
        CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN,
      ].includes(rentalStatus)}
    />
  );
};
