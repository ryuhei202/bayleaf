import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { BuyItemFetcher } from "./BuyItemFetcher";

export const BuyItem = () => {
  const { data: membersData, error: membersError } = useMembersIndex();

  const { data: chartData, error: chartError } = useChartIndex({
    params: {
      rentalStatus: [CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN , CHART_RENTAL_STATUS.WAIT_INSPECTION],

    },
  });

  if (membersError) return <ErrorPage message={membersError.message} />;
  if (chartError) return <ErrorPage message={chartError.message} />;
  if (!membersData || !chartData) return <LoaderPage />;

  if (chartData.charts.length == 0) {
    return <ErrorPage message={'レンタル中のアイテムが存在しません'} />;
  }

  if(membersData.length == 2 || membersData.length == 0) {
    return <ErrorPage message={'一つのアカウントを指定してください'} />;
  }

  return <BuyItemFetcher chartId={chartData.charts[0].id} possesedPoint={membersData[0].point} />;
};
