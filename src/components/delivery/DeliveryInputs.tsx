import { TChartDeliveryDateResponse } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { DatetimePicker } from "../baseParts/inputs/DatetimePicker";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { Toggle } from "../baseParts/inputs/Toggle";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";
import { useEffect, useState } from "react";
type TProps = {
  deliveryDateShowData: TChartDeliveryDateResponse;
};

export const DeliveryInputs = ({ deliveryDateShowData }: TProps) => {
  const isSelectableDatePresent =
    deliveryDateShowData.selectableDatePeriod !== null;
  const isDiscountDatePresent =
    deliveryDateShowData.discountSelectableDatePeriod !== null;

  const [isDiscountEnabled, setIsDiscountDateEnabled] = useState(
    isDiscountDatePresent
  );
  const [isShortest, setIsShortest] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  useEffect(() => {
    setSelectedDate("");
  }, [isDiscountEnabled]);

  const allDateEnabled =
    isSelectableDatePresent === true && isDiscountDatePresent === true;

  const switchDate = (data: TChartDeliveryDateResponse) => {
    const min = isDiscountEnabled
      ? (data.discountSelectableDatePeriod?.start as string)
      : (data.selectableDatePeriod?.start as string);
    const max = isDiscountEnabled
      ? (data.discountSelectableDatePeriod?.end as string)
      : (data.selectableDatePeriod?.end as string);

    return { min, max };
  };

  console.log(
    `discount適用${isDiscountDatePresent}  通常日にち選択${isSelectableDatePresent} discountが適用できる？:${isDiscountEnabled} setされてる現在の日付:${selectedDate}`
  );
  console.log(deliveryDateShowData.deliveryTimeOptions);

  return (
    <div>
      <div className="grid-cols-2 place-items-center justify-items-center my-10">
        {allDateEnabled && (
          <div className="flex gap-3">
            <Toggle
              checked={isDiscountEnabled}
              onChange={setIsDiscountDateEnabled}
            />
            <Typography>持ち続ける割引きを適用する</Typography>
          </div>
        )}

        <div className="flex gap-3 my-10">
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
      </div>

      {!isShortest && (
        <div>
          <DatetimePicker
            selectableDateFrom={switchDate(deliveryDateShowData).min}
            selectableDateTo={switchDate(deliveryDateShowData).max}
            currentDate={selectedDate}
            setCurrentDate={setSelectedDate}
          />
          <div className="my-5">
            <Typography color="strong-gray">時間指定</Typography>
            {/* valueをデフォルトでselected_timesにしといてdeliveryTimeOptionsをstate管理する */}
            <DropdownMenuAlt
              value={"選択した画面" || ""}
              onChange={(event) => console.log("setState")}
              className="bg-clay"
            >
              {deliveryDateShowData.deliveryTimeOptions.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </DropdownMenuAlt>
          </div>
        </div>
      )}
    </div>
  );
};
