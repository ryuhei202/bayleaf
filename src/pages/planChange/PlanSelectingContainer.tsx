import { useCallback, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersPlanChange } from "../../api/members/useMembersPlanChange";
import { usePlanRequestsDestroy } from "../../api/planRequests/usePlanRequestsDestroy";
import { PlanSelecting } from "../../components/pageParts/planChange/PlanSelecting";
import { findPlanById, TPlan } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: TMembersIndexResponse;
};

export const PlanSelectingContainer = ({ memberData }: TProps) => {
  const [selectedPlan, setSelectedPlan] = useState<TPlan>();
  const [isNextPayment, setIsNextPayment] = useState<boolean>(true);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [isCancelCompleted, setIsCancelCompleted] = useState<boolean>(false);
  const { mutate: planChangeMutate, isLoading: isPlanChangeLoading } =
    useMembersPlanChange({
      memberId: memberData.id,
    });
  const { mutate: requestDestroyMutate, isLoading: isRequestDestroyLoading } =
    usePlanRequestsDestroy({
      memberId: memberData.id,
    });

  const handleSubmit = () => {
    if (!selectedPlan) return;
    planChangeMutate(
      { planId: selectedPlan.id, isNextPayment },
      {
        onSuccess: () => {
          setIsCompleted(true);
        },
      }
    );
  };

  const handleCancelPlanChange = () => {
    requestDestroyMutate(undefined, {
      onSuccess: () => {
        setIsCancelCompleted(true);
      },
    });
  };

  const handleCancel = useCallback(() => {
    setSelectedPlan(undefined);
  }, []);

  const handlePlanSelect = ({ planId }: { planId: number }) => {
    const plan = findPlanById(planId);
    setSelectedPlan(plan);
  };

  const handleTimingChange = () => {
    setIsNextPayment(!isNextPayment);
  };

  return (
    <>
      <PlanSelecting
        memberData={{
          mPlanId: memberData.mPlanId,
          nextPaymentDate: memberData.nextPaymentDate,
          rentalRemainingNum: memberData.rentalRemainingNum,
          requestedPlanId: memberData.requestedPlanId ?? undefined,
        }}
        selectedPlan={selectedPlan}
        isPlanChangeLoading={isPlanChangeLoading}
        isRequestDestroyLoading={isRequestDestroyLoading}
        isNextPayment={isNextPayment}
        isCompleted={isCompleted}
        isCancelCompleted={isCancelCompleted}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        onPlanSelect={handlePlanSelect}
        onTimingChange={handleTimingChange}
        onCancelPlanChange={handleCancelPlanChange}
      />
    </>
  );
};
