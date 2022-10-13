import { DropdownMenuAlt } from "./DropdownMenuAlt";
import { Typography } from "../Typography";
import { DELIVERY_TIMES } from "../../../models/shared/TDeliveryTimes";
type TProps = {
  readonly selectableDateFrom: Date;
  readonly selectableDateTo: Date;
};

const replaceDate = (date: Date) => {
  const month = date.getMonth() + 1;
  console.log(
    `${date.getFullYear()}-${month < 10 ? "0" + month : month}-${
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    }`
  );
  return `${date.getFullYear()}-${month < 10 ? "0" + month : month}-${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }`;
};

export const DatetimePicker = ({
  selectableDateFrom,
  selectableDateTo,
}: TProps) => {
  console.log(
    `${selectableDateFrom.getFullYear()}-${selectableDateFrom.getMonth()}-${selectableDateFrom.getDay()}`
  );
  console.log(replaceDate(selectableDateFrom));

  return (
    <div>
      <Typography color="strong-gray">次回配送希望日程</Typography>
      <input
        className="border-2 border-themeGray resize-none py-1 w-full px-3 rounded-md bg-clay"
        type="date"
        value={replaceDate(selectableDateFrom)}
        min={replaceDate(selectableDateFrom)}
        max={replaceDate(selectableDateTo)}
      />
      <div className="mt-5">
        <Typography color="strong-gray">時間指定</Typography>
        <DropdownMenuAlt
          value={"選択した画面" || ""}
          placeholder="時間指定なし"
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
  );
};
