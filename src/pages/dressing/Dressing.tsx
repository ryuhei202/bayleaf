import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { Page } from "../../components/baseParts/Page";
import { Typography } from "../../components/baseParts/Typography";
import { ChartList } from "../../components/chart/ChartList";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { DressingFetcher } from "./DressingFetcher";

export const Dressing = () => {
  const [selectedChart, setSelectedChart] =
    useState<TChartResponse | undefined>(undefined);
  const { data: chartIndexData, error: chartIndexError } = useChartIndex({
    params: {
      rentalStatus: [CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN],
    },
  });

  useEffect(() => {
    document.title = `着こなしページ | UWear`;
  }, []);

  useEffect(() => {
    if (chartIndexData === undefined) return;

    if (chartIndexData.charts.length === 1)
      setSelectedChart(chartIndexData.charts[0]);
  }, [chartIndexData]);

  if (chartIndexError)
    return <ErrorMessage message={chartIndexError.message} />;

  if (!chartIndexData) return <Loader active />;

  if (chartIndexData.charts.length === 0) {
    window.location.href = "https://leeap.jp/rental/plan_check";
    return (
      <div className="flex justify-center items-center h-screen">
        <Typography>リダイレクト中...</Typography>
      </div>
    );
  }

  return (
    <>
      {selectedChart ? (
        <DressingFetcher chart={selectedChart} />
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
