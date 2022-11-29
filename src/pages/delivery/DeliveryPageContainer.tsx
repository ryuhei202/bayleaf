import { useState } from "react";
import liff from "@line/liff/dist/lib";

import { DeliveryPage } from "../../components/pageParts/delivery/DeliveryPage";
import { useDeliveryDateUpdate } from "../../api/deliveryDates/useDeliveryDateUpdate";
import { TChartDeliveryDateResponse } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { AlertDialog } from "../../components/baseParts/legacy/dialogs/AlertDialog";
import { useQueryClient } from "react-query";
import { Page } from "../../components/baseParts/legacy/Page";
import { PageHeader } from "../../components/baseParts/legacy/PageHeader";
import { SelectedDeliveryDate } from "../../components/pageParts/delivery/SelectedDeliveryDate";
import { Paper } from "../../components/baseParts/legacy/Paper";

type Props = {
  chartId: number;
  deliveryDateShowData: TChartDeliveryDateResponse;
  nextPaymentsDate: string;
  isReadOnly: boolean;
};

export const DeliveryPageContainer = ({
  chartId,
  deliveryDateShowData,
  nextPaymentsDate,
  isReadOnly,
}: Props) => {
  const [isDiscountEnabled, setIsDiscountDateEnabled] = useState(
    deliveryDateShowData.discountSelectableDatePeriod !== null &&
      Math.ceil(
        (new Date(nextPaymentsDate).getTime() - new Date().getTime()) /
          (1000 * 3600 * 24)
      ) < 15 // 決済日まで15日以下の場合、割引が選択された状態をデフォルトにする
  );
  const [isShortest, setIsShortest] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [time, setTime] = useState(
    deliveryDateShowData.chartDeliveryTime?.time.toString() ??
      deliveryDateShowData.memberDeliveryTime.toString()
  );
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  const selectableDateRange = isDiscountEnabled
    ? {
        min: deliveryDateShowData.discountSelectableDatePeriod?.start as string,
        max: deliveryDateShowData.discountSelectableDatePeriod?.end as string,
      }
    : {
        min: deliveryDateShowData.selectableDatePeriod?.start as string,
        max: deliveryDateShowData.selectableDatePeriod?.end as string,
      };

  const getOneDayLater = (): string => {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    return date.toLocaleDateString("ja-JP");
  };

  const shortestDateRange = {
    min:
      new Date(nextPaymentsDate) > new Date(selectableDateRange.max)
        ? getOneDayLater()
        : nextPaymentsDate,
    max: selectableDateRange.min,
  };
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useDeliveryDateUpdate({
    chartId,
    deliveryDate: isShortest ? null : selectedDate,
    shipmentDate: isShortest ? shortestDateRange.min : null,
    time: Number(time),
  });

  const isDiscountSelectable =
    deliveryDateShowData.selectableDatePeriod !== null &&
    deliveryDateShowData.discountSelectableDatePeriod !== null;

  if (isReadOnly)
    return (
      <Page className="px-5">
        <PageHeader title="下記の日時で配送致します" />
        <Paper className="mt-10">
          {deliveryDateShowData.chartDeliveryTime !== null && (
            <SelectedDeliveryDate
              selectedDeliveryDate={deliveryDateShowData.chartDeliveryTime}
              timeOptions={deliveryDateShowData.deliveryTimeOptions}
            />
          )}
        </Paper>
      </Page>
    );

  return (
    <>
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
        onSubmit={() =>
          mutate(undefined, {
            onSuccess: () => {
              queryClient
                .invalidateQueries(`charts/${chartId}/delivery_date`)
                .then(() => setIsSuccessDialogOpen(true));
            },
          })
        }
        isLoading={isLoading}
      />
      <AlertDialog
        open={isSuccessDialogOpen}
        title="以下の内容で配送日時を指定しました"
        description={
          <>
            配送希望日：
            {deliveryDateShowData.chartDeliveryTime?.date ?? "最短日"}
            <br></br>
            配送希望時間：
            {deliveryDateShowData.deliveryTimeOptions.find(
              (option) =>
                option.id === deliveryDateShowData.chartDeliveryTime?.time
            )?.name ?? "指定無し"}
          </>
        }
        onClickOk={() => liff.closeWindow()}
        onClose={() => setIsSuccessDialogOpen(false)}
      ></AlertDialog>
    </>
  );
};
