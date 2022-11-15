import { useGetRequest } from "../useGetRequest";
import { TSimplifiedHearingShowResponse } from "./TSimplifiedHearingShowResponse";
type TSimplifiedHearingDate = {
  readonly data?: TSimplifiedHearingShowResponse;
  readonly error: Error | null;
};

type TSimplifiedHearingParams = {
  coordinateId?: number;
};

export const useDeliveryDateShow = ({
  coordinateId,
}: TSimplifiedHearingParams): TSimplifiedHearingDate => {
  const { data, error } = useGetRequest<TSimplifiedHearingShowResponse>(
    `coordinates/${coordinateId}/simplified_hearings`
  );
  return {
    data,
    error,
  };
};
