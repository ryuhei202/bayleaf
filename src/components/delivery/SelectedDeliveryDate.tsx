import { TTimeOptions } from "../../api/deliveryDates/TChartDeliveryDateResponse";
import { Typography } from "../baseParts/Typography";

type TProps = {
  selectedDeliveryDate: {
    time: number;
    date: string | null;
  };
  timeOptions: TTimeOptions[];
};

export const SelectedDeliveryDate = ({
  selectedDeliveryDate,
  timeOptions,
}: TProps) => {
  return (
    <>
      <Typography>
        配送希望日：
        {selectedDeliveryDate.date ?? "最短日"}
      </Typography>
      <Typography>
        配送希望時間：
        {timeOptions.find((option) => option.id === selectedDeliveryDate.time)
          ?.name ?? "指定無し"}
      </Typography>
    </>
  );
};
