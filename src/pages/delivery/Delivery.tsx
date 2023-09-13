import { useEffect } from "react";
import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { CHART_RENTAL_STATUS } from "../../models/chart/ChartRentalStatus";
import { DeliveryFetcher } from "./DeliveryFetcher";

export const Delivery = () => {
  useEffect(() => {
    document.title = `配送日時選択ページ | UWear`;
  }, []);
  const { data: chartIndexData, error: chartIndexError } = useChartIndex({
    params: {
      rentalStatus: [
        CHART_RENTAL_STATUS.WAIT_HEARING,
        CHART_RENTAL_STATUS.WAIT_COORDE_REGIST,
        CHART_RENTAL_STATUS.WAIT_DELIVERY,
        CHART_RENTAL_STATUS.WAIT_RENTAL_RETURN,
      ],
      limit: 1,
      order: "DESC",
    },
  });
  const { data: membersIndexData } = useMembersIndex();

  if (chartIndexError) return <ErrorPage message={chartIndexError.message} />;
  if (!chartIndexData || !membersIndexData) return <LoaderPage />;
  if (membersIndexData.length !== 1) {
    return (
      <Page className="flex items-center justify-center">
        <Typography>
          <>ユーザーが複数人います</>
        </Typography>
      </Page>
    );
  }
  if (
    !chartIndexData.charts[0] ||
    membersIndexData[0].nextPaymentDate === null
  ) {
    return (
      <Page className="flex items-center justify-center">
        <Typography>
          <>配送指定日選択の期間外です。</>
        </Typography>
      </Page>
    );
  }
  return (
    <DeliveryFetcher
      chartIndexDataId={chartIndexData.charts[0].id}
      rentalStatus={chartIndexData.charts[0].rentalStatus}
      nextPaymentDate={membersIndexData[0].nextPaymentDate}
    />
  );
};
