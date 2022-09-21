import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query/types/react/types";
import { TChartCreateRequest } from "./TChartCreateRequest";
import { usePostRequest } from "./../usePostRequest";

type TChartCreate = {
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    unknown,
    TChartCreateRequest,
    unknown
  >;
  readonly isLoading: boolean;
  readonly isError: boolean;
  readonly isSuccess: boolean;
};

export const useChartCreate = (): TChartCreate => {
  const { mutate, isLoading, isError, isSuccess } =
    usePostRequest<TChartCreateRequest>("charts");

  return { mutate, isLoading, isError, isSuccess };
};
