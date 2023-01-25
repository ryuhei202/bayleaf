import { useChartIndex } from "../../api/charts/useChartIndex";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { HearingFetcher } from "./HearingFetcher";
import { NewHearingContainer } from "./NewHearingContainer";

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

  if (chartIndexError) return <ErrorPage message={chartIndexError.message} />;

  if (!chartIndexData) return <LoaderPage />;

  if (member.isReturnRequired) {
    return (
      <Page className="flex justify-center items-center">
        <div>
          <Typography>
            返却が必要な洋服があります。 <br />
            ご返却が確認でき次第ヒアリングに回答できます。 <br />
          </Typography>
          <Typography className="mt-4 text-xl">
            返却は
            <a
              href={`${process.env.REACT_APP_HOST_URL}/return/select_reserve_target`}
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              こちら
            </a>
          </Typography>
        </div>
      </Page>
    );
  }

  if (
    chartIndexData.charts.length <= 0 ||
    chartIndexData.charts[0].planId !==
      (member.requestedPlanId ?? member.mPlanId)
  ) {
    return (
      <NewHearingContainer
        member={member}
        nextPlanId={member.requestedPlanId ?? member.mPlanId}
      />
    );
  }
  return <HearingFetcher member={member} chart={chartIndexData.charts[0]} />;
};
