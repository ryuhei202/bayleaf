import { TChartDeliveryDateResponse } from "../../api/charts/TChartDeliveryDateResponse";
import { DELIVERY_TIMES } from "../../models/shared/TDeliveryTimes";
import { DatetimePicker } from "../baseParts/inputs/DatetimePicker";
import { DropdownMenuAlt } from "../baseParts/inputs/DropdownMenuAlt";
import { Toggle } from "../baseParts/inputs/Toggle";
import { SelectButton } from "../baseParts/SelectButton";
import { Typography } from "../baseParts/Typography";
import { useState } from "react";
type TProps = {
  deliveryDateShowData: TChartDeliveryDateResponse;
  isSelectableDateEnabled: boolean;
  isDiscountDateEnabled: boolean;
};

export const DeliveryInputs = ({
  deliveryDateShowData,
  isSelectableDateEnabled,
  isDiscountDateEnabled,
}: TProps) => {
  if (isSelectableDateEnabled == false && isDiscountDateEnabled == false) {
    throw new Error("どっちもfalse");
  }
  const onlySelectabled =
    isSelectableDateEnabled == true && isDiscountDateEnabled == false;
  const onlyDiscount =
    isSelectableDateEnabled == false && isDiscountDateEnabled == true;
  // どっちがfalseによってstateの初期値を変える。（どっちもtrueの場合以外はそもそも表示させない）
  const [isDiscountDatePeriod, setIsDiscountDatePeriod] = useState(
    onlyDiscount ? true : false
  );
  const [isShortest, setIsShortest] = useState(true);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const switchDate = (data: TChartDeliveryDateResponse) => {
    const min = isDiscountDatePeriod
      ? (data.discountSelectableDatePeriod?.start as string)
      : (data.selectableDatePeriod?.start as string);
    const max = isDiscountDatePeriod
      ? (data.discountSelectableDatePeriod?.end as string)
      : (data.selectableDatePeriod?.end as string);

    return { min, max };
  };

  console.log(
    `discount適用${isDiscountDateEnabled}  通常日にち選択${isSelectableDateEnabled}`
  );

  return (
    <div>
      <div className="grid-cols-2 place-items-center justify-items-center my-10">
        <div className="flex gap-3">
          <Toggle
            checked={isDiscountDatePeriod}
            onChange={setIsDiscountDatePeriod}
          />
          <Typography>持ち続ける割引きを適用する</Typography>
        </div>
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
            setCurrentDate={() => setSelectedDate}
          />
          <div className="my-5">
            <Typography color="strong-gray">時間指定</Typography>
            <DropdownMenuAlt
              value={"選択した画面" || ""}
              onChange={(event) => console.log("setState")}
              className="bg-clay"
            >
              {Object.values(DELIVERY_TIMES).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </DropdownMenuAlt>
          </div>
        </div>
      )}
    </div>
  );
};
