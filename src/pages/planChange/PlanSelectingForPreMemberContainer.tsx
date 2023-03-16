import { useState } from "react";
import { useMembersPreMemberPlanChange } from "../../api/members/useMembersPreMemberPlanChange";
import { PlanSelectingForPreMember } from "../../components/pageParts/planChange/PlanSelectingForPreMember";
import { findPlanById } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: {
    id: number;
    isFirstTime: boolean;
    isSuspend: boolean;
    mPlanId: number;
  };
};

export const PlanSelectingForPreMemberContainer = ({ memberData }: TProps) => {
  const [selectedPlanName, setSelectedPlanName] = useState<string>();
  const { mutate, isLoading } = useMembersPreMemberPlanChange({
    memberId: memberData.id,
  });
  const handleSubmit = (planId: number) => {
    mutate(
      { planId },
      {
        onSuccess: () => {
          setSelectedPlanName(findPlanById(planId).jpName);
        },
      }
    );
  };

  return (
    <PlanSelectingForPreMember
      planId={memberData.mPlanId}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      selectedPlanName={selectedPlanName}
    />
  );
};
