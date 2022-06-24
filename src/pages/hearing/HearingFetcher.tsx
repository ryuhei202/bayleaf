import { Loader } from "semantic-ui-react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useHearingIndex } from "../../api/hearings/useHearingIndex";
import { ErrorMessage } from "../../components/shared/ErrorMessage";

type TProps = {
  readonly chart: TChartResponse;
};
export const HearingFetcher = ({ chart }: TProps) => {
  const { data: hearingIndexData, error: hearingIndexError } = useHearingIndex({
    chartId: chart.id,
  });

  if (hearingIndexError)
    return <ErrorMessage message={hearingIndexError.message} />;

  if (!hearingIndexData) return <Loader active />;

  if (hearingIndexData.hearings.length <= 0) {
    return <></>;
  }

  return <></>;
};
