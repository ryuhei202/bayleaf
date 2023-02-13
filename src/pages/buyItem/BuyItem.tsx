import { useEffect, useState } from "react";
import { TChartResponse } from "../../api/charts/TChartResponse";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Page } from "../../components/baseParts/legacy/Page";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { ChartList } from "../../components/resourceParts/chart/ChartList";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { BuyItemFetcher } from "./BuyItemFetcher";

export const BuyItem = () => {
  const [selectedChart, setSelectedChart] = useState<TChartResponse>();

  const { data: membersData, error: membersError } = useMembersIndex();

  const { data: chartData, error: chartError } = useChartIndex({
    params: {
      rentalStatus: [
        CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN,
        CHART_RENTAL_STATUS.WAIT_INSPECTION,
      ],
    },
  });

  useEffect(() => {
    document.title = `アイテム購入 | UWear`;
  }, []);

  useEffect(() => {
    if (chartData === undefined) return;

    if (chartData.charts.length === 1) setSelectedChart(chartData.charts[0]);
  }, [chartData]);

  if (membersError) return <ErrorPage message={membersError.message} />;
  if (chartError) return <ErrorPage message={chartError.message} />;
  if (!membersData || !chartData) return <LoaderPage />;

  if (chartData.charts.length === 0) {
    return <ErrorPage message="レンタル中のアイテムが存在しません" />;
  }

  if (membersData.length === 2 || membersData.length === 0) {
    return <ErrorPage message="一つのアカウントを指定してください" />;
  }

  return (
    <>
      {selectedChart ? (
        <BuyItemFetcher
          chartId={selectedChart.id}
          possesedPoint={membersData[0].point}
        />
      ) : (
        <Page>
          <ChartList
            chartResponses={chartData.charts}
            onClickChart={setSelectedChart}
          />
        </Page>
      )}
    </>
  );
};
