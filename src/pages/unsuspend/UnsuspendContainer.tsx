import { useCallback, useState } from "react";
import { useMemberPlansCreate } from "../../api/memberPlans/useMemberPlansCreate";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersUnsuspend } from "../../api/members/useMemberUnsuspend";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { PlanSelectingForUnsuspend } from "../../components/pageParts/unsuspend/PlanSelectingForUnsuspend";
import { findPlanById, TPlan } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: TMembersIndexResponse;
};
export const UnsuspendContainer = ({ memberData }: TProps) => {
  const [selectedPlan, setSelectedPlan] = useState<TPlan>();
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const {
    mutate: unsuspendMutate,
    isLoading: isUnsuspendLoading,
    error: unsuspendError,
  } = useMembersUnsuspend({
    memberId: memberData.id,
  });
  const {
    mutate: memberPlanMutate,
    isLoading: isMemberPlanLoading,
    error: memberPlanError,
  } = useMemberPlansCreate({
    memberId: memberData.id,
  });

  const handleSubmit = () => {
    if (!selectedPlan) return;
    if (memberData.mPlanId === null) {
      memberPlanMutate(
        { planId: selectedPlan.id },
        {
          onSuccess: () => {
            setIsCompleted(true);
          },
        }
      );
    } else {
      unsuspendMutate(
        { planId: selectedPlan.id },
        {
          onSuccess: () => {
            setIsCompleted(true);
          },
        }
      );
    }
  };

  const handlePlanSelect = ({ planId }: { planId: number }) => {
    const plan = findPlanById(planId);
    setSelectedPlan(plan);
  };

  const handleCancel = useCallback(() => {
    setSelectedPlan(undefined);
  }, []);

  if (unsuspendError) return <ErrorPage message={unsuspendError.message} />;
  if (memberPlanError) return <ErrorPage message={memberPlanError.message} />;

  return (
    <PlanSelectingForUnsuspend
      planId={memberData.mPlanId}
      isLoading={isUnsuspendLoading || isMemberPlanLoading}
      isCompleted={isCompleted}
      selectedPlan={selectedPlan}
      isRentalRemained={memberData.rentalRemainingNum > 0}
      onSubmit={handleSubmit}
      onPlanSelect={handlePlanSelect}
      onCancel={handleCancel}
    />
  );
};
