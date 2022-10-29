import React from "react";

type TProps = {
  readonly selectableDateFrom: string;
  readonly selectableDateTo: string;
  readonly currentDate: string;
  readonly setCurrentDate: (event: string) => void;
};

export const DatetimePicker = ({
  selectableDateFrom,
  selectableDateTo,
  currentDate,
  setCurrentDate,
}: TProps) => {
  return (
    <input
      className="border-2 border-themeGray resize-none py-1 w-full px-3 rounded-md bg-clay"
      type="date"
      onChange={(e) => setCurrentDate(e.target.value)}
      value={currentDate}
      min={selectableDateFrom}
      max={selectableDateTo}
    />
  );
};
