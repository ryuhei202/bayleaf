import liff from "@line/liff/dist/lib";
import { useCallback, useState } from "react";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersPlanChange } from "../../api/members/useMembersPlanChange";
import { PlanSelecting } from "../../components/pageParts/planChange/PlanSelecting";
import { findPlanById, TPlan } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: TMembersIndexResponse;
};

export const PlanSelectingContainer = ({ memberData }: TProps) => {
  const [selectedPlan, setSelectedPlan] = useState<TPlan>();
  const [isNextPayment, setIsNextPayment] = useState<boolean>(true);
  const { mutate, isLoading } = useMembersPlanChange({
    memberId: memberData.id,
  });

  const handleSubmit = () => {
    if (!selectedPlan) return;
    mutate(
      { planId: selectedPlan.id, isNextPayment },
      {
        onSuccess: () => {
          liff.closeWindow();
        },
      }
    );
  };

  const handleCancel = useCallback(() => {
    setSelectedPlan(undefined);
  }, []);

  const handlePlanSelect = ({ planId }: { planId: number }) => {
    const plan = findPlanById(planId);
    setSelectedPlan(plan);
  };

  const handleTimingChange = useCallback(() => {
    setIsNextPayment(!isNextPayment);
  }, []);

  return (
    <PlanSelecting
      memberData={memberData}
      selectedPlan={selectedPlan}
      isLoading={isLoading}
      isNextPayment={isNextPayment}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      onPlanSelect={handlePlanSelect}
      onTimingChange={handleTimingChange}
    />
  );
};
