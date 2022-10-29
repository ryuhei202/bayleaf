import { DeliveryPage } from "../../components/delivery/DeliveryPage";
import { useDeliveryDateUpdates } from "../../api/deliveryDates/useDeliveryDateUpdate";
import { TChartDeliveryDateResponse } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { useState } from "react";

type Props = {
  chartId: number;
  deliveryDateShowData: TChartDeliveryDateResponse;
  nextPaymentsDate: string;
};
export const DeliveryPageContainer = ({
  chartId,
  deliveryDateShowData,
  nextPaymentsDate,
}: Props) => {
  const [isDiscountEnabled, setIsDiscountDateEnabled] = useState(
    deliveryDateShowData.discountSelectableDatePeriod !== null
  );
  const [isShortest, setIsShortest] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState(
    deliveryDateShowData.chartDeliveryTime?.time.toString() ??
      deliveryDateShowData.memberDeliveryTime.toString()
  );

  const selectableDateRange = isDiscountEnabled
    ? {
        min: deliveryDateShowData.discountSelectableDatePeriod?.start as string,
        max: deliveryDateShowData.discountSelectableDatePeriod?.end as string,
      }
    : {
        min: deliveryDateShowData.selectableDatePeriod?.start as string,
        max: deliveryDateShowData.selectableDatePeriod?.end as string,
      };

  const today = new Date().toLocaleDateString();
  const shortestDateRange = {
    min:
      new Date(nextPaymentsDate) > new Date(selectableDateRange.max)
        ? today
        : nextPaymentsDate,
    max: selectableDateRange.min,
  };

  const { mutate, isLoading } = useDeliveryDateUpdates({
    chartId,
    deliveryDate: isShortest ? null : selectedDate,
    shipmentDate: isShortest ? shortestDateRange.min : null,
    time: Number(time),
  });

  const isDiscountSelectable =
    deliveryDateShowData.selectableDatePeriod !== null &&
    deliveryDateShowData.discountSelectableDatePeriod !== null;

  return (
    <DeliveryPage
      chartDeliveryTime={deliveryDateShowData.chartDeliveryTime}
      deliveryTimeOptions={deliveryDateShowData.deliveryTimeOptions}
      isDiscountSelectable={isDiscountSelectable}
      onDiscountChange={(isChecked) => {
        setIsDiscountDateEnabled(isChecked);
        setSelectedDate("");
      }}
      isDiscountEnabled={isDiscountEnabled}
      isShortest={isShortest}
      onSelectShortest={setIsShortest}
      shortestDateRange={shortestDateRange}
      selectableDateRange={selectableDateRange}
      selectedDate={selectedDate}
      onSelectDate={setSelectedDate}
      selectedDeliveryTime={time}
      onSelectDeliveryTime={setTime}
      onSubmit={mutate}
      isLoading={isLoading}
    />
  );
};
