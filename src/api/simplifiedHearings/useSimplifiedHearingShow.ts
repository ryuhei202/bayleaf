import { useGetRequest } from "../useGetRequest";
import { TSimplifiedHearingShowResponse } from "./TSimplifiedHearingShowResponse";
type TSimplifiedHearing = {
  readonly data?: TSimplifiedHearingShowResponse;
  readonly error: Error | null;
  readonly isLoading?: boolean;
};

type TSimplifiedHearingParams = {
  coordinateId?: number;
};

export const useSimplifiedHearingShow = ({
  coordinateId,
}: TSimplifiedHearingParams): TSimplifiedHearing => {
  const { data, error, isLoading } =
    useGetRequest<TSimplifiedHearingShowResponse>(
      `coordinates/${coordinateId}/simplified_hearing`
    );
  return {
    data,
    error,
    isLoading,
  };
};
