import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePatchRequest } from "../usePatchRequest";

type StylingReferenceUpdate = {
  readonly mutate: UseMutateFunction<
    AxiosResponse<any>,
    unknown,
    void,
    unknown
  >;
  readonly isLoading: boolean;
};

type Params = {
  readonly optionIds: number[];
};
export const useStylingReferenceUpdate = (
  optionIds: number[],
  memberId: number
): StylingReferenceUpdate => {
  const params = { optionIds };
  const { mutate, isLoading } = usePatchRequest<Params>(
    `members/${memberId}/styling_reference`,
    params
  );

  return { mutate, isLoading };
};
