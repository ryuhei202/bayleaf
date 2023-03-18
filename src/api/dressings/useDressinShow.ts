import { useGetRequest } from "../useGetRequest";
import { TDressingsIndexResponse } from "./TDressingsIndexResponse";

type TDressingsIndex = {
  readonly data?: TDressingsIndexResponse;
  readonly error: Error | null;
};

type TDressingsIndexArgs = {
  readonly coordinateId: number;
};

export const useDressingsShow = ({
  coordinateId,
}: TDressingsIndexArgs): TDressingsIndex => {
  const { data, error } = useGetRequest<TDressingsIndexResponse>(
    `coordinates/${coordinateId}/dressings`
  );

  return {
    data,
    error,
  };
};
