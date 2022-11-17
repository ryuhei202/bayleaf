import { Loader } from "semantic-ui-react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { TNonNullableDressing } from "../../api/dressings/TDressing";
import { useDressingsIndex } from "../../api/dressings/useDressingsIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { DressingPage } from "./DressingPage";

type TProps = {
  readonly chart: TChartResponse;
};
export const DressingFetcher = ({ chart }: TProps) => {
  const { data: dressingIndexData, error: dressingIndexError } =
    useDressingsIndex({ chartId: chart.id });

  if (dressingIndexError)
    return <ErrorMessage message={dressingIndexError.message} />;

  if (!dressingIndexData) return <Loader active />;

  // リリース直後には着こなしページに必要な情報がまだ存在しない可能性があるため、
  // 以下のどれかが欠けている場合はマイページの着こなしに遷移するようにする
  if (
    dressingIndexData.dressings.every(
      (dressing) =>
        dressing.categorizedForms &&
        dressing.comment &&
        dressing.description &&
        dressing.footwear
    )
  ) {
    return (
      <DressingPage
        dressings={dressingIndexData.dressings as TNonNullableDressing[]}
      />
    );
  }

  window.location.href = `${process.env.REACT_APP_HOST_URL}/rental/plan_check`;
  return (
    <div className="flex justify-center items-center h-screen">
      <Typography>リダイレクト中...</Typography>
    </div>
  );
};
