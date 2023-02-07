import { useDeleteRequest } from "../useDeleteRequest";

type TArgs = {
  memberId: number;
};

export const usePlanRequestsDestroy = ({ memberId }: TArgs) => {
  const { mutate, isLoading } = useDeleteRequest(
    `members/${memberId}/plan_request`
  );
  return {
    mutate,
    isLoading,
  };
};
