export type TChartDeliveryDateResponse = {
  date: string | null;
  timeOptions: TtimeOptions[];
  selectableDatePeriod: {
    start: string;
    end: string;
  } | null;
  discountSelectableDatePeriod: {
    start: string;
    end: string;
  } | null;
};

type TtimeOptions = {
  id: number;
  name: string;
};
