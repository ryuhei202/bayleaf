import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TReviewCreate = {
  readonly mutate: UseMutateFunction<
    AxiosResponse,
    unknown,
    TReviewCreateParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TReviewCreateParams = {
  readonly reviews: {
    readonly coordinateId: number;
    readonly choiceId: number;
    readonly reasonChoiceIds: number[];
    readonly text: string;
  }[];
};

export const useReviewCreate = (): TReviewCreate => {
  const { mutate, isLoading } = usePostRequest<TReviewCreateParams>("reviews");

  return { mutate, isLoading };
};
