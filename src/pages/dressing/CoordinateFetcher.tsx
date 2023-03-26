import { TChartResponse } from "../../api/charts/TChartResponse";
import { useCoordinateIndex } from "../../api/coordinates/useCoordinateIndex";
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

  return <DressingPage coordinateDatas={coordinateDatas} />;
};
