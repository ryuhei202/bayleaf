import { usePostRequest } from "../usePostRequest";

type TArgs = {
  memberId: number;
};
type TParams = {
  planId: number;
};

export const useMemberPlansCreate = ({ memberId }: TArgs) => {
  const { mutate, isLoading, error } = usePostRequest<TParams>(
    `members/${memberId}/member_plan`
  );
  return {
    mutate,
    isLoading,
    error,
  };
};
