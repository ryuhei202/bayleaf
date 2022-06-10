import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query/types/react/types";
import { TChartCreateRequest } from "./TChartCreateRequest";
import { usePostRequest } from "./../usePostRequest";

type TChartCreate = {
  readonly mutate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    TChartCreateRequest,
    unknown
  >;
  readonly isLoading: boolean;
  readonly isSuccess: boolean;
};

export const useChartCreate = (): TChartCreate => {
  const { mutate, isLoading, isSuccess } =
    usePostRequest<TChartCreateRequest>("charts");

  return { mutate, isLoading, isSuccess };
};
