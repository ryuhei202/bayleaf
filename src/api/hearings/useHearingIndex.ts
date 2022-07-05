import { useGetRequest } from "../useGetRequest";
import { THearingsIndexResponse } from "./THearingsIndexResponse";

type THearingIndex = {
  readonly data?: THearingsIndexResponse;
  readonly error: Error | null;
};

type THearingIndexArgs = {
  readonly chartId: number;
};

export const useHearingIndex = ({
  chartId,
}: THearingIndexArgs): THearingIndex => {
  const { data, error } = useGetRequest<THearingsIndexResponse>(
    `charts/${chartId}/hearings`
  );

  return {
    data,
    error,
  };
};
