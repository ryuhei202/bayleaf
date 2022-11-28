import { usePatchRequest } from "../usePatchRequest";

type TArgs = {
  memberId: number;
  planId: number;
};
type TParams = Omit<TArgs, "memberId">;

export const useMembersPreMemberPlanChange = ({ memberId, planId }: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/members/${memberId}/pre_member_plan_change`,
    { planId }
  );
  return {
    mutate,
    isLoading,
  };
};
