import { useGetRequest } from "../useGetRequest";

type TBusinessDayResponse = {
  readonly fromDate: string;
};

type TBusinessDayParams = {
  daysLater: number;
};

export const useBusinessDayShow = ({ daysLater }: TBusinessDayParams) => {
  const { data, error } = useGetRequest<
    TBusinessDayResponse,
    TBusinessDayParams
  >(`business_day`, { daysLater });
  return {
    data,
    error,
  };
};
