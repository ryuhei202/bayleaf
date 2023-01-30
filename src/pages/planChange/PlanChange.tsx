import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ExternalLink } from "../../components/baseParts/text/ExternalLink";
import { PlanChangeWithValidation } from "../../components/pageParts/planChange/PlanChangeWithValidation";
import { PlanSelectingContainer } from "./PlanSelectingContainer";
import { PlanSelectingForPreMemberContainer } from "./PlanSelectingForPreMemberContainer";
import { getPlanChangeValidater } from "./validater/getPlanChangeValidater";

export const PlanChange = () => {
  useEffect(() => {
    document.title = "プラン選択 | UWear";
  }, []);
  const { data: membersData, error: membersError } = useMembersIndex();
  const { data: chartsData, error: chartsError } = useChartIndex({
    params: {
      isHearingCompleted: true,
    },
  });

  if (membersError) return <ErrorPage message={membersError.message} />;
  if (chartsError) return <ErrorPage message={chartsError.message} />;

  if (!membersData || !chartsData) return <LoaderPage />;

  const {
    isStatusNotRentable,
    isFirstUserPreparingCoordinate,
    isSuspend,
    isMultpleMembers,
  } = getPlanChangeValidater({
    membersData,
    chartsData,
  });

  if (isMultpleMembers) {
    return (
      <div data-testid="isMultpleMembers">
        <PlanChangeWithValidation
          reason={
            <Typography className="text-red">
              LINEアカウントに紐づいたユーザーが複数存在しています。一つのアカウントを退会した後にプラン変更をお願いします。
              <br />
              <ExternalLink
                href={`${process.env.REACT_APP_SIRNIGHT_URL}/faq/register#os0_3qsz1jip`}
                className="inline-block"
              >
                複数アカウントについて
              </ExternalLink>
            </Typography>
          }
        />
      </div>
    );
  }

  if (isSuspend) return <Navigate to="/unsuspend" />;

  if (isStatusNotRentable) {
    return (
      <div data-testid="isStatusNotRentable">
        <PlanChangeWithValidation
          reason={
            <Typography className="text-red">
              現在コーデ作成またはレンタル中のため、プラン変更できません。
            </Typography>
          }
        />
      </div>
    );
  }

  if (isFirstUserPreparingCoordinate) {
    return (
      <div data-testid="isFirstUserPreparingCoordinate">
        <PlanChangeWithValidation
          reason={
            <Typography className="text-red">
              初回のコーデを作成しているため、プラン変更できません。
            </Typography>
          }
        />
      </div>
    );
  }

  if (membersData[0].isFirstTime && chartsData.charts.length === 0) {
    return (
      <div data-testid="PlanSelectingForPreMemberContainer">
        <PlanSelectingForPreMemberContainer
          memberData={membersData[0]}
          chartsData={chartsData}
        />
      </div>
    );
  }

  return (
    <div data-testid="PlanSelectingContainer">
      <PlanSelectingContainer memberData={membersData[0]} />
    </div>
  );
};
