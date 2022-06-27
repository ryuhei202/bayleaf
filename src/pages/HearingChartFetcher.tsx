import { Loader } from "semantic-ui-react";
import { useChartIndex } from "../api/charts/useChartIndex";
import { TMembersIndexResponse } from "../api/members/TMembersIndexResponse";
import { Page } from "../components/baseParts/Page";
import { PageHeader } from "../components/baseParts/PageHeader";
import { ErrorMessage } from "../components/shared/ErrorMessage";
import { FirstHearingContainer } from "./hearing/FirstHearingContainer";
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

  if (member.isAlreadyHearing) {
    return (
      <Page>
        <PageHeader
          title="既に回答済みです。"
          className="m-4"
          subtitle="スタイリストが対応しますので、少々お待ちください。"
        />
      </Page>
    );
  }
  if (chartIndexError)
    return <ErrorMessage message={chartIndexError.message} />;

  if (!chartIndexData) return <Loader active />;

  if (chartIndexData.charts.length <= 0) {
    return <FirstHearingContainer member={member} />;
  }
  return <HearingFetcher member={member} chart={chartIndexData.charts[0]} />;
};
