import { useGetRequest } from "../useGetRequest";
import { TReviewOptionIndexResponse } from "./TReviewOptionIndexResponse";

type StylingReferenceShow = {
  readonly data?: TReviewOptionIndexResponse;
  readonly error: Error | null;
};
export const useReviewOptionIndex = (): StylingReferenceShow => {
  const { data, error } =
    useGetRequest<TReviewOptionIndexResponse>(`review_options`);
  return {
    data,
    error,
  };
};
