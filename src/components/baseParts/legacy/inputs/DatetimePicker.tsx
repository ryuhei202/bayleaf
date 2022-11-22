import React from "react";

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
  return (
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
