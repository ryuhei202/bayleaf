import liff from "@line/liff/dist/lib";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useHearingIndex } from "../../api/hearings/useHearingIndex";
import { TNotNullPlanIdMember } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/legacy/Button";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { sortHearings } from "../../models/hearing/THearingForms";
import { HearingContainer } from "./HearingContainer";

type TProps = {
  readonly member: TNotNullPlanIdMember;
  readonly chart: TChartResponse;
};
export const HearingFetcher = ({ member, chart }: TProps) => {
  const { data: hearingIndexData, error: hearingIndexError } = useHearingIndex({
    chartId: chart.id,
  });

  if (hearingIndexError)
    return <ErrorPage message={hearingIndexError.message} />;

  if (!hearingIndexData) return <LoaderPage />;

  if (!member.isLatestChartDelivered) {
    return (
      <HearingAnswerConfirm
        title="回答済みヒアリング内容"
        subTitle="スタイリストが対応します。少々お待ちくださいませ。"
        confirmAnswers={hearingIndexData.hearings.map((hearing) => {
          return { answer: hearing.categorizedForms };
        })}
        footer={
          <Button
            variant="primary"
            onClick={() => liff.closeWindow()}
            border={true}
          >
            閉じる
          </Button>
        }
      />
    );
  }

  return (
    <HearingContainer
      member={member}
      hearings={hearingIndexData.hearings.map((hearing) => {
        return {
          coordinateId: hearing.coordinateId,
          categorizedForms: sortHearings(hearing.categorizedForms),
        };
      })}
    />
  );
};
