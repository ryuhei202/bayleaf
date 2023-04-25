import { usePostRequest } from "./../usePostRequest";
import { TChartCreateForPlanRequest } from "./TChartCreateForPlanRequest";

export const useChartCreateForPlan = () => {
  const { mutate, isLoading, isError, isSuccess, error } =
    usePostRequest<TChartCreateForPlanRequest>("charts/plan");

  return { mutate, isLoading, isError, isSuccess, error };
};
