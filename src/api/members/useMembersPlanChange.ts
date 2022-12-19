import { usePatchRequest } from "../usePatchRequest";

type TArgs = {
  memberId: number;
};
type TParams = {
  planId: number;
  isNextPayment: boolean;
};

export const useMembersPlanChange = ({ memberId }: TArgs) => {
  const { mutate, isLoading } = usePatchRequest<TParams>(
    `/members/${memberId}/plan_change`
  );
  return {
    mutate,
    isLoading,
  };
};
