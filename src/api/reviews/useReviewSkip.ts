import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TReviewSkip = {
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    unknown,
    TReviewSkipParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TReviewSkipParams = {
  readonly chartId: number;
};

export const useReviewSkip = (): TReviewSkip => {
  const { mutate, isLoading } =
    usePostRequest<TReviewSkipParams>("reviews/skip");

  return { mutate, isLoading };
};
