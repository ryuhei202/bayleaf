import { useGetRequest } from "../useGetRequest";
import { TStylingReferenceShowResponse } from "./TStylingReferenceShowResponse";

type StylingReferenceShow = {
  readonly data?: TStylingReferenceShowResponse[];
  readonly error: Error | null;
};
export const useStylingReferenceShow = (
  memberId: number
): StylingReferenceShow => {
  const { data, error } = useGetRequest<TStylingReferenceShowResponse[]>(
    `members/${memberId}/styling_reference`
  );
  return {
    data,
    error,
  };
};
