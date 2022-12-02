import { usePatchRequest } from "../usePatchRequest";

type TArgs = {
  memberId: number;
};
type TParams = Omit<TArgs, "memberId">;

export const useMembersPreMemberPlanChange = ({ memberId }: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/members/${memberId}/pre_member_plan_change`
  );
  return {
    mutate,
    isLoading,
  };
};
