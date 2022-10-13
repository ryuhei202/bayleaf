import { useChartShow } from "../../api/charts/useChartShow";
import { useSearchParams } from "react-router-dom";
import { Loader } from "semantic-ui-react";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { useEffect } from "react";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { Page } from "../../components/baseParts/Page";
import { Typography } from "../../components/baseParts/Typography";

export const Delivery = () => {
  useEffect(() => {
    document.title = `配送日時選択ページ | UWear`;
  }, []);
  const [searchParams] = useSearchParams();
  const chartId = Number(searchParams.get("chartId"));
  const { data: chartShowData, error: chartShowError } = useChartShow({
    chartId,
  });

  if (chartShowError) return <ErrorMessage message={chartShowError.message} />;
  if (!chartShowData) return <Loader active />;
  if (chartShowData.rentalStatus !== CHART_RENTAL_STATUS.WAIT_HEARING) {
    return (
      <Page className="flex justify-center items-center">
        <Typography>
          <>配送指定日選択の期間外です。</>
        </Typography>
      </Page>
    );
  }
  return <div>Derivery</div>;
};
