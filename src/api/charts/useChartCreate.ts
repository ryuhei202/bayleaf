import { usePostRequest } from "./../usePostRequest";
import { TChartCreateRequest } from "./TChartCreateRequest";

export const useChartCreate = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    usePostRequest<TChartCreateRequest>("charts");

  return { mutate, isLoading, isError, isSuccess, error };
};
