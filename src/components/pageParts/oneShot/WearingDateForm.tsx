import { Button } from "../../baseParts/Button";
import { DatetimePicker } from "../../baseParts/legacy/inputs/DatetimePicker";
import { Page } from "../../baseParts/legacy/Page";
import { Typography } from "../../baseParts/legacy/Typography";
import { ScheduleDiagram } from "./ScheduleDiagram";

type TProps = {
  readonly selectedDate: string;
  readonly earliestDate: string;
  readonly onSelect: (wearingDate: string) => void;
  readonly onSubmit: () => void;
};

export const WearingDateForm = ({
  selectedDate,
  earliestDate,
  onSelect,
  onSubmit,
}: TProps) => {
  const lastDate = new Date(earliestDate);
  lastDate.setDate(lastDate.getDate() + 30);

  return (
    <Page className="flex flex-col h-full min-h-screen justify-between items-center text-themeGray p-3">
      <div>
        <Typography size="2xl" className="text-center my-8">
          利用日を選択してください
        </Typography>
        <ScheduleDiagram
          wearDate={selectedDate !== "" ? selectedDate : undefined}
          className="mb-8"
        />
        <DatetimePicker
          selectableDateFrom={new Date(earliestDate).toLocaleDateString(
            "ja-JP"
          )}
          selectableDateTo={lastDate.toLocaleDateString("ja-JP")}
          currentDate={selectedDate}
          onChangeDate={onSelect}
        />
      </div>
      <Button
        size="large"
        className="mt-4"
        disabled={selectedDate === ""}
        onClick={onSubmit}
      >
        利用日を確定する
      </Button>
    </Page>
  );
};
