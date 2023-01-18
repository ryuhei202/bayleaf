import liff from "@line/liff/dist/lib";
import { Button } from "../../baseParts/Button";
import { DatetimePicker } from "../../baseParts/legacy/inputs/DatetimePicker";
import { DropdownMenuAlt } from "../../baseParts/legacy/inputs/DropdownMenuAlt";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  readonly selectedDate: string;
  readonly earliestDate: string;
  readonly onSelect: (wearingDate: string) => void;
  readonly onSubmit: (wearingDate: string) => void;
};

export const WearingDateForm = ({
  selectedDate,
  earliestDate,
  onSelect,
  onSubmit,
}: TProps) => {
  const selectableDates = new Array<string>();
  const lastDate = new Date(earliestDate);
  lastDate.setDate(lastDate.getDate() + 30);
  const currentDate = new Date(earliestDate);
  while (currentDate <= lastDate) {
    selectableDates.push(currentDate.toLocaleDateString("ja-JP"));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <Page className="flex flex-col h-full min-h-screen justify-between items-center text-themeGray p-3">
      <Typography size="2xl" className="text-center mt-8">
        単発レンタルを開始する
      </Typography>
      {liff.getOS() === "ios" ? (
        <DropdownMenuAlt
          value={selectedDate}
          onChange={(event) => onSelect(event.target.value)}
          placeholder="希望日を選択してください"
        >
          {selectableDates.map((selectableDate) => (
            <option key={selectableDate} value={selectableDate}>
              {selectableDate}
            </option>
          ))}
        </DropdownMenuAlt>
      ) : (
        <DatetimePicker
          selectableDateFrom={earliestDate}
          selectableDateTo={lastDate.toLocaleDateString("ja-JP")}
          currentDate={selectedDate}
          onChangeDate={onSelect}
        />
      )}
      <Button
        size="large"
        className="mt-4"
        disabled={selectedDate === ""}
        onClick={() => onSubmit(selectedDate)}
      >
        利用日を確定する
      </Button>
    </Page>
  );
};
