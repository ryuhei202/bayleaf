import { useGetRequest } from "../useGetRequest";
import { TDressingsIndexResponse } from "./TDressingsIndexResponse";

type TDressingsIndex = {
  readonly data?: TDressingsIndexResponse;
  readonly error: Error | null;
};

type TDressingsIndexArgs = {
  readonly chartId: number;
};

export const useDressingsIndex = ({
  chartId,
}: TDressingsIndexArgs): TDressingsIndex => {
  const { data, error } = useGetRequest<TDressingsIndexResponse>(
    `charts/${chartId}/dressings`
  );

  return {
    data,
    error,
  };
};
