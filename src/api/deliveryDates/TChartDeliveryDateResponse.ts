export type TChartDeliveryDateResponse = {
  chartDeliveryTime: {
    time: number;
    date: string | null;
  } | null;
  memberDeliveryTime: number;
  date: string | null;
  deliveryTimeOptions: TTimeOptions[];
  selectableDatePeriod: {
    start: string;
    end: string;
  } | null;
  discountSelectableDatePeriod: {
    start: string;
    end: string;
  } | null;
};

type TTimeOptions = {
  id: number;
  name: string;
};
