import { Loader } from "semantic-ui-react";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { PlanSelectingContainer } from "./PlanSelectingContainer";

export const PlanChange = () => {
  const { data: membersData, error: membersError } = useMembersIndex();
  const { data: chartsData, error: chartsError } = useChartIndex({
    params: {
      isHearingCompleted: true,
    },
  });

  if (membersError) return <ErrorMessage message={membersError.message} />;
  if (chartsError) return <ErrorMessage message={chartsError.message} />;

  if (!membersData || !chartsData) return <Loader active />;

  if (membersData.length !== 1) {
    return (
      <Page className="flex justify-center items-center">
        <Typography>
          <>ユーザーが複数人います。</>
        </Typography>
      </Page>
    );
  }

  return (
    <PlanSelectingContainer
      memberData={membersData[0]}
      chartsData={chartsData}
    />
  );
};
