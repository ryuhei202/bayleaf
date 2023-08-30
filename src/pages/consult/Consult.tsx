import { useEffect, useState } from "react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ChartList } from "../../components/resourceParts/chart/ChartList";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { ConsultFetcher } from "./ConsultFetcher";

export const Consult = () => {
  const [selectedChart, setSelectedChart] =
    useState<TChartResponse | undefined>(undefined);
  const { data: chartIndexData, error: chartIndexError } = useChartIndex({
    params: {
      rentalStatus: [CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN],
      isReturnRequired: false,
    },
  });

  useEffect(() => {
    document.title = "着こなし相談 | UWear";
  }, []);

  useEffect(() => {
    if (chartIndexData === undefined) return;

    if (chartIndexData.charts.length === 1)
      setSelectedChart(chartIndexData.charts[0]);
  }, [chartIndexData]);

  if (chartIndexError) return <ErrorPage message={chartIndexError.message} />;

  if (!chartIndexData) return <LoaderPage />;

  if (chartIndexData.charts.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
        <Typography>
          <>着こなし相談対象のレンタルはありません。</>
        </Typography>
      </div>
    );

  return (
    <>
      {selectedChart ? (
        <ConsultFetcher chartId={selectedChart.id} />
      ) : (
        <Page>
          <ChartList
            chartResponses={chartIndexData.charts}
            onClickChart={setSelectedChart}
          />
        </Page>
      )}
    </>
  );
};
