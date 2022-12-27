import { useDeleteRequest } from "../useDeleteRequest";

type TArgs = {
  memberId: number;
};

export const usePlanRequestsDestroy = ({ memberId }: TArgs) => {
  const { mutate, isLoading } = useDeleteRequest(
    `members/${memberId}/planRequest`
  );
  return {
    mutate,
    isLoading,
  };
};
