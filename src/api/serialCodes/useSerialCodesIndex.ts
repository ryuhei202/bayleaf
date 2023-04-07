import { useGetRequest } from "../useGetRequest";
import { TSerialCodesIndexResponse } from "./TSerialCodesIndexResponse";

type TSerialCodesIndex = {
  readonly data?: TSerialCodesIndexResponse[];
  readonly error: Error | null;
};

type TParams = {
  memberId: number | undefined;
};
export const useSerialCodesIndex = ({
  memberId,
}: TParams): TSerialCodesIndex => {
  const { data, error } = useGetRequest<TSerialCodesIndexResponse[]>(
    `${memberId}`
  );

  return {
    data,
    error,
  };
};
