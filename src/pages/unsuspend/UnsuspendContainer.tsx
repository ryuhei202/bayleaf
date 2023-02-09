import liff from "@line/liff/dist/lib";
import { useCallback, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersUnsuspend } from "../../api/members/useMemberUnsuspend";
import { PlanSelectingForUnsuspend } from "../../components/pageParts/unsuspend/PlanSelectingForUnsuspend";
import { findPlanById, TPlan } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: TMembersIndexResponse;
};
export const UnsuspendContainer = ({ memberData }: TProps) => {
  const [selectedPlan, setSelectedPlan] = useState<TPlan>();
  const { mutate, isLoading } = useMembersUnsuspend({
    memberId: memberData.id,
  });
  const handleSubmit = () => {
    if (!selectedPlan) return;
    mutate(
      { planId: selectedPlan.id },
      {
        onSuccess: () => {
          liff.closeWindow();
        },
      }
    );
  };

  const handlePlanSelect = ({ planId }: { planId: number }) => {
    const plan = findPlanById(planId);
    setSelectedPlan(plan);
  };

  const handleCancel = useCallback(() => {
    setSelectedPlan(undefined);
  }, []);
  return (
    <PlanSelectingForUnsuspend
      planId={memberData.mPlanId}
      isLoading={isLoading}
      selectedPlan={selectedPlan}
      isRentalRemained={memberData.rentalRemainingNum > 0}
      onSubmit={handleSubmit}
      onPlanSelect={handlePlanSelect}
      onCancel={handleCancel}
    />
  );
};
