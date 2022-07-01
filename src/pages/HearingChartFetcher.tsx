import { Loader } from "semantic-ui-react";
import { useChartIndex } from "../api/charts/useChartIndex";
import { TMembersIndexResponse } from "../api/members/TMembersIndexResponse";
import { Page } from "../components/baseParts/Page";
import { PageHeader } from "../components/baseParts/PageHeader";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { NewHearingContainer } from "./hearing/NewHearingContainer";
import { HearingFetcher } from "./hearing/HearingFetcher";

type TProps = {
  readonly member: TMembersIndexResponse;
};
export const HearingChartFetcher = ({ member }: TProps) => {
  const { data: chartIndexData, error: chartIndexError } = useChartIndex({
    params: {
      limit: 1,
      order: "DESC",
    },
  });

  if (chartIndexError)
    return <ErrorMessage message={chartIndexError.message} />;

  if (!chartIndexData) return <Loader active />;

  if (
    chartIndexData.charts.length <= 0 ||
    chartIndexData.charts[0].planId !== member.mPlanId
  ) {
    return <NewHearingContainer member={member} />;
  }
  return <HearingFetcher member={member} chart={chartIndexData.charts[0]} />;
};
