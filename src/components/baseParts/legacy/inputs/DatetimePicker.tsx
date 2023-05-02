import liff from "@line/liff";
import { DropdownMenuAlt } from "./DropdownMenuAlt";

type TProps = {
  readonly selectableDateFrom: string;
  readonly selectableDateTo: string;
  readonly currentDate: string;
  readonly onChangeDate: (date: string) => void;
};

export const DatetimePicker = ({
  selectableDateFrom,
  selectableDateTo,
  currentDate,
  onChangeDate,
}: TProps) => {
  const selectableDates = new Array<string>();
  let date = new Date(selectableDateFrom);
  while (date <= new Date(selectableDateTo)) {
    selectableDates.push(date.toLocaleDateString("ja-JP"));
    date.setDate(date.getDate() + 1);
  }
  return liff.getOS() === "ios" ? (
    <DropdownMenuAlt
      value={currentDate}
      onChange={(event) => onChangeDate(event.target.value)}
    >
      {selectableDates.map((selectableDate) => (
        <option key={selectableDate} value={selectableDate}>
          {selectableDate}
        </option>
      ))}
    </DropdownMenuAlt>
  ) : (
    <input
      className="border-2 border-themeGray resize-none py-1 w-full px-3 rounded-md bg-clay"
      type="date"
      onChange={(e) => onChangeDate(e.target.value)}
      value={currentDate}
      min={selectableDateFrom}
      max={selectableDateTo}
    />
  );
};
