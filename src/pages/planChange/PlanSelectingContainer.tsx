import { useState } from "react";
import { TChartIndexResponse } from "../../api/charts/TChartIndexResponse";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersPreMemberPlanChange } from "../../api/members/useMembersPreMemberPlanChange";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { PlanSelecting } from "../../components/pageParts/planChange/PlanSelecting";
import { findPlanById } from "../../models/shared/Plans";

type TProps = {
  readonly memberData: TMembersIndexResponse;
  readonly chartsData: TChartIndexResponse;
};
export const PlanSelectingContainer = ({ memberData, chartsData }: TProps) => {
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
  if (
    !memberData.isFirstTime ||
    memberData.isSuspend ||
    chartsData.charts.length > 0
  ) {
    window.location.href = `${process.env.REACT_APP_HOST_URL}/plan_change`;
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography>リダイレクト中...</Typography>
      </div>
    );
  }

  return (
    <PlanSelecting
      planId={memberData.mPlanId}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      selectedPlanName={selectedPlanName}
    />
  );
};
