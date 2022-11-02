import { TTimeOptions } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { DatetimePicker } from "../baseParts/inputs/DatetimePicker";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { Toggle } from "../baseParts/inputs/Toggle";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";
import { Button } from "../baseParts/Button";
import { Paper } from "../baseParts/Paper";
import { Page } from "../baseParts/Page";
import { PageHeader } from "../baseParts/PageHeader";

type TProps = {
  chartDeliveryTime: {
    date: string | null;
    time: number;
  } | null;
  deliveryTimeOptions: TTimeOptions[];
  isDiscountSelectable: boolean;
  onDiscountChange: (isChecked: boolean) => void;
  isDiscountEnabled: boolean;
  isShortest: boolean;
  onSelectShortest: (isSelect: boolean) => void;
  shortestDateRange: {
    min: string;
    max: string;
  };
  selectableDateRange: {
    min: string;
    max: string;
  };
  selectedDate: string;
  onSelectDate: (date: string) => void;
  selectedDeliveryTime: string;
  onSelectDeliveryTime: (deliveryTime: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
};

export const DeliveryPage = ({
  chartDeliveryTime,
  deliveryTimeOptions,
  isDiscountSelectable,
  onDiscountChange,
  isDiscountEnabled,
  isShortest,
  onSelectShortest,
  shortestDateRange,
  selectableDateRange,
  selectedDate,
  onSelectDate,
  selectedDeliveryTime,
  onSelectDeliveryTime,
  onSubmit,
  isLoading,
}: TProps) => {
  return (
    <Page className="px-5">
      <PageHeader title="配送日程を選んでください"></PageHeader>
      <div>
        {chartDeliveryTime !== null && (
          <Paper className="mt-10">
            <Typography size="xl" className="mb-2">
              指定中の配送日時
            </Typography>
            <Typography>
              配送希望日：
              {chartDeliveryTime.date ?? "最短日"}
            </Typography>
            <Typography>
              配送希望時間：
              {deliveryTimeOptions.find(
                (option) => option.id === chartDeliveryTime?.time
              )?.name ?? "指定無し"}
            </Typography>
          </Paper>
        )}
        <div className="mb-4 mt-10">
          {isDiscountSelectable ? (
            <div className="flex gap-3">
              <Toggle checked={isDiscountEnabled} onChange={onDiscountChange} />
              <Typography>持ち続ける割引を適用する</Typography>
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
            onClick={() => onSelectShortest(true)}
          >
            最短で発送する
            <Typography>(営業日6日以内)</Typography>
          </SelectButton>
          <SelectButton
            selected={!isShortest}
            onClick={() => onSelectShortest(false)}
          >
            <Typography>日程を選択する</Typography>
          </SelectButton>
        </div>

        {isShortest ? (
          <>
            <Typography color="strong-gray">配送予定期間</Typography>
            <Typography color="strong-gray">
              {new Date(shortestDateRange.min).toLocaleDateString("ja-JP")}〜
              {new Date(shortestDateRange.max).toLocaleDateString("ja-JP")}
            </Typography>
          </>
        ) : (
          <>
            <Typography color="strong-gray">配送希望日</Typography>
            <DatetimePicker
              selectableDateFrom={selectableDateRange.min}
              selectableDateTo={selectableDateRange.max}
              currentDate={selectedDate}
              onChangeDate={onSelectDate}
            />
          </>
        )}
        <div className="my-5">
          <Typography color="strong-gray">配送希望時間</Typography>
          <DropdownMenuAlt
            value={selectedDeliveryTime}
            onChange={(event) => onSelectDeliveryTime(event.target.value)}
            className="bg-clay"
          >
            {deliveryTimeOptions.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </DropdownMenuAlt>
        </div>
      </div>
      <Button
        onClick={onSubmit}
        isLoading={isLoading}
        disabled={isShortest === false && selectedDate === ""}
        className="mt-10"
      >
        確定する
      </Button>
    </Page>
  );
};
