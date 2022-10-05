import { useGetRequest } from "../useGetRequest";
import { TReviewOptionIndexResponse } from "./TReviewOptionIndexResponse";

type ReviewOptionIndex = {
  readonly data?: TReviewOptionIndexResponse;
  readonly error: Error | null;
};

export const useReviewOptionIndex = (): ReviewOptionIndex => {
  const { data, error } =
    useGetRequest<TReviewOptionIndexResponse>(`review_options`);
  return {
    data,
    error,
  };
};
