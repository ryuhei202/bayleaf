import { usePostRequest } from "./../usePostRequest";
import { TChartCreateForOneShotRequest } from "./TChartCreateForOneShotRequest";

export const useChartCreateForOneShot = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    usePostRequest<TChartCreateForOneShotRequest>("charts/one_shot");

  return { mutate, isLoading, isError, isSuccess, error };
};
