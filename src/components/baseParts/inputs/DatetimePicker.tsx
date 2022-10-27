import { DropdownMenuAlt } from "./DropdownMenuAlt";
import { Typography } from "../Typography";
import { DELIVERY_TIMES } from "../../../models/shared/TDeliveryTimes";
type TProps = {
  readonly selectableDateFrom: string;
  readonly selectableDateTo: string;
  readonly currentDate: string;
  readonly setCurrentDate: () => void;
};

export const DatetimePicker = ({
  selectableDateFrom,
  selectableDateTo,
  currentDate,
  setCurrentDate,
}: TProps) => {
  return (
    <div>
      <Typography color="strong-gray">次回配送希望日程</Typography>
      <input
        className="border-2 border-themeGray resize-none py-1 w-full px-3 rounded-md bg-clay"
        type="date"
        onChange={setCurrentDate}
        defaultValue={currentDate}
        min={selectableDateFrom}
        max={selectableDateTo}
      />
    </div>
  );
};
