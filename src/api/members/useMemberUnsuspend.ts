import { usePatchRequest } from "../usePatchRequest";

type TArgs = {
  memberId: number;
};
type TParams = TArgs;

export const useMembersUnsuspend = ({ memberId }: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/members/${memberId}/unsuspend`
  );
  return {
    mutate,
    isLoading,
  };
};
