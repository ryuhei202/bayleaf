import { useGetRequest } from "../useGetRequest";
import { TSerialCodesIndexResponse } from "./TSerialCodesIndexResponse";

type TSerialCodesIndex = {
  readonly data?: TSerialCodesIndexResponse[];
  readonly error: Error | null;
};

type TArgs = {
  member_id: number;
};
export const useSerialCodesIndex = ({
  member_id,
}: TArgs): TSerialCodesIndex => {
  const { data, error } = useGetRequest<TSerialCodesIndexResponse[]>(
    `${member_id}`
  );

  return {
    data,
    error,
  };
};
