import { useGetRequest } from "../useGetRequest";
import { TSerialCodesIndexResponse } from "./TSerialCodesIndexResponse";

type TSerialCodesIndex = {
  readonly data?: TSerialCodesIndexResponse[];
  readonly error: Error | null;
};

type TArgs = {
  readonly memberId: number;
  readonly params: {
    readonly isOneShot?: boolean;
  };
};
export const useSerialCodesIndex = ({
  memberId,
  params,
}: TArgs): TSerialCodesIndex => {
  const { data, error } = useGetRequest<TSerialCodesIndexResponse[]>(
    `members/${memberId}/serial_codes`,
    params
  );

  return {
    data,
    error,
  };
};
