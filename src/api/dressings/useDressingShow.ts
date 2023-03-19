import { useGetRequest } from "../useGetRequest";
import { TDressingsShowResponse } from "./TDressingsShowResponse";

type TDressingsIndex = {
  readonly data?: TDressingsShowResponse;
  readonly error: Error | null;
};

type TDressingsShowArgs = {
  readonly coordinateId: number;
};

export const useDressingShow = ({
  coordinateId,
}: TDressingsShowArgs): TDressingsIndex => {
  const { data, error } = useGetRequest<TDressingsShowResponse>(
    `coordinates/${coordinateId}/dressings`
  );

  return {
    data,
    error,
  };
};
