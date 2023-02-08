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
      rentalStatus: [CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN],
    },
  });

  if (membersError) return <ErrorPage message={membersError.message} />;
  if (chartError) return <ErrorPage message={chartError.message} />;
  if (!membersData || !chartData) return <LoaderPage />;

  return <BuyItemFetcher chartId={chartData.charts[0].id} />;
};
