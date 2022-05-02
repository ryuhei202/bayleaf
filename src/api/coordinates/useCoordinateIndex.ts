import { useGetRequest } from "../useGetRequest";
import { TCoordinateIndexResponse } from "./TCoordinateIndexResponse";

type TCoordinateIndex = {
  readonly data?: TCoordinateIndexResponse;
  readonly error: Error | null;
};

type TCoordinateIndexArgs = { chartId: number };

export const useCoordinateIndex = ({
  chartId,
}: TCoordinateIndexArgs): TCoordinateIndex => {
  const { data, error } = useGetRequest<TCoordinateIndexResponse>(
    `charts/${chartId}/coordinates`
  );

  return {
    data,
    error,
  };
};
