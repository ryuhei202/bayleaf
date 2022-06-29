import { Loader } from "semantic-ui-react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useHearingIndex } from "../../api/hearings/useHearingIndex";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { HearingContainer } from "./HearingContainer";

type TProps = {
  readonly member: TMembersIndexResponse;
  readonly chart: TChartResponse;
};
export const HearingFetcher = ({ member, chart }: TProps) => {
  const { data: hearingIndexData, error: hearingIndexError } = useHearingIndex({
    chartId: chart.id,
  });

  if (hearingIndexError)
    return <ErrorMessage message={hearingIndexError.message} />;

  if (!hearingIndexData) return <Loader active />;

  return (
    <HearingContainer member={member} hearings={hearingIndexData.hearings} />
  );
};
