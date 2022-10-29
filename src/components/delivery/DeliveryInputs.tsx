import { TChartDeliveryDateResponse } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { DatetimePicker } from "../baseParts/inputs/DatetimePicker";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { Toggle } from "../baseParts/inputs/Toggle";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";
import { useState } from "react";
import { useDeliveryDateUpdates } from "../../api/deliveryDates/useDeliveryDateUpdate";
import { Button } from "../baseParts/Button";
import { Paper } from "../baseParts/Paper";

type TProps = {
  deliveryDateShowData: TChartDeliveryDateResponse;
  nextPaymentsDate: string;
  chartId: number;
};

export const DeliveryInputs = ({
  deliveryDateShowData,
  nextPaymentsDate,
  chartId,
}: TProps) => {
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
    <div>
      {deliveryDateShowData.chartDeliveryTime !== null && (
        <Paper className="mt-10">
          <Typography size="xl" className="mb-2">
            指定中の配送日時
          </Typography>
          <Typography>
            配送希望日：
            {deliveryDateShowData.chartDeliveryTime.date ?? "最短日"}
          </Typography>
          <Typography>
            配送希望時間：
            {deliveryDateShowData.deliveryTimeOptions.find(
              (option) =>
                option.id === deliveryDateShowData.chartDeliveryTime?.time
            )?.name ?? "指定無し"}
          </Typography>
        </Paper>
      )}
      <div className="mb-4 mt-10">
        {isDiscountSelectable ? (
          <div className="flex gap-3">
            <Toggle
              checked={isDiscountEnabled}
              onChange={(isChecked) => {
                setIsDiscountDateEnabled(isChecked);
                setSelectedDate("");
              }}
            />
            <Typography>持ち続ける割引きを適用する</Typography>
          </div>
        ) : (
          isDiscountEnabled && (
            <Typography>持ち続ける割引は適用されます</Typography>
          )
        )}
      </div>

      <div className="flex gap-3 mb-4">
        <SelectButton
          selected={isShortest}
          onClick={() => setIsShortest(!isShortest)}
        >
          最短で発送する
          <Typography>(営業日6日以内)</Typography>
        </SelectButton>
        <SelectButton
          selected={!isShortest}
          onClick={() => {
            setIsShortest(!isShortest);
          }}
        >
          <Typography>日程を選択する</Typography>
        </SelectButton>
      </div>

      {isShortest ? (
        <>
          <Typography color="strong-gray">配送予定期間</Typography>
          <Typography color="strong-gray">
            {new Date(shortestDateRange.min).toLocaleDateString()}〜
            {new Date(shortestDateRange.max).toLocaleDateString()}
          </Typography>
        </>
      ) : (
        <>
          <Typography color="strong-gray">配送希望日</Typography>
          <DatetimePicker
            selectableDateFrom={selectableDateRange.min}
            selectableDateTo={selectableDateRange.max}
            currentDate={selectedDate}
            setCurrentDate={setSelectedDate}
          />
        </>
      )}
      <div className="my-5">
        <Typography color="strong-gray">配送希望時間</Typography>
        <DropdownMenuAlt
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
          className="bg-clay"
        >
          {deliveryDateShowData.deliveryTimeOptions.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </DropdownMenuAlt>
      </div>
      <Button
        onClick={() => mutate()}
        isLoading={isLoading}
        disabled={isShortest === false && selectedDate === ""}
      >
        確定する
      </Button>
    </div>
  );
};
