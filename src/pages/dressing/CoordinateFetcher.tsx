import { TChartResponse } from "../../api/charts/TChartResponse";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { DressingPage } from "./DressingPage";

type TProps = {
  readonly chart: TChartResponse;
};
export const CoordinateFetcher = ({ chart }: TProps) => {
  const { data: coordinateDatas, error: coordinateError } = useCoordinateIndex({
    chartId: chart.id,
  });
  if (coordinateError) return <ErrorPage message={coordinateError.message} />;

  if (!coordinateDatas) return <LoaderPage />;

  // リリース直後には着こなしページに必要な情報がまだ存在しない可能性があるため、
  // 以下のどれかが欠けている場合はマイページの着こなしに遷移するようにする
  if (
    coordinateDatas.coordinates.every(
      (cordinate) =>
        cordinate.id &&
        cordinate.isReviewed &&
        cordinate.items &&
    )
  ) {
    return (
      <DressingPage
      coordinateDatas={coordinateDatas}
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
