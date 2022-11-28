import liff from "@line/liff/dist/lib";
import { TChartIndexResponse } from "../../api/charts/TChartIndexResponse";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { useMembersPreMemberPlanChange } from "../../api/members/useMembersPreMemberPlanChange";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { PlanSelecting } from "../../components/pageParts/planChange/PlanSelecting";

type TProps = {
  readonly memberData: TMembersIndexResponse;
  readonly chartData: TChartIndexResponse;
};
export const PlanSelectingContainer = ({ memberData, chartData }: TProps) => {
  const { mutate, isLoading } = useMembersPreMemberPlanChange({
    memberId: memberData.id,
  });
  const handleSubmit = (planId: number) => {
    mutate(
      { planId },
      {
        onSuccess: () => {
          liff.closeWindow();
        },
      }
    );
  };
  if (
    !memberData.isFirstTime ||
    memberData.isSuspend ||
    chartData.charts.length <= 0
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
    />
  );
};
