import { TChartCreateRequest } from "./TChartCreateRequest";
import { usePostRequest } from "./../usePostRequest";

export const useChartCreate = () => {
  const { mutate, isLoading, isError, isSuccess } =
    usePostRequest<TChartCreateRequest>("charts");

  return { mutate, isLoading, isError, isSuccess };
};
