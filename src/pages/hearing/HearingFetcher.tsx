import liff from "@line/liff/dist/lib";
import { Loader } from "semantic-ui-react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useHearingIndex } from "../../api/hearings/useHearingIndex";
import { TMembersIndexResponse } from "../../api/members/TMembersIndexResponse";
import { Button } from "../../components/baseParts/Button";
import { HearingAnswerConfirm } from "../../components/pageParts/hearing/HearingAnswerConfirm";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { sortHearings } from "../../models/hearing/THearingForms";
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
