import { useChartIndex } from "../../api/charts/useChartIndex";
import { useMembersIndex } from "../../api/members/useMembersIndex";
import { Loader } from "semantic-ui-react";
import { ErrorMessage } from "../../components/shared/ErrorMessage";
import { useEffect } from "react";
import { Page } from "../../components/baseParts/Page";
import { Typography } from "../../components/baseParts/Typography";
import { DeliveryForm } from "./DeliveryForm";
import { PageHeader } from "../../components/baseParts/PageHeader";

export const Delivery = () => {
  useEffect(() => {
    document.title = `配送日時選択ページ | UWear`;
  }, []);
  const { data: chartIndexData, error: chartIndexError } = useChartIndex({
    params: {
      rentalStatus: [1],
      isHearingCompleted: true,
      limit: 1,
      order: "DESC",
    },
  });
  const { data: membersIndexData } = useMembersIndex();

  if (chartIndexError)
    return <ErrorMessage message={chartIndexError.message} />;
  if (!chartIndexData || !membersIndexData) return <Loader active />;
  if (membersIndexData.length !== 1) {
    return (
      <Page className="flex justify-center items-center">
        <Typography>
          <>ユーザーが複数人います</>
        </Typography>
      </Page>
    );
  }
  if (!chartIndexData.charts[0]) {
    return (
      <Page className="flex justify-center items-center">
        <Typography>
          <>配送指定日選択の期間外です。</>
        </Typography>
      </Page>
    );
  }
  return (
    <div className="">
      <Page className="p-5">
        <PageHeader title="配送日程を選んでください"></PageHeader>
        <DeliveryForm
          chartId={chartIndexData.charts[0].id}
          nextPaymentsDate={membersIndexData[0].nextPaymentDate}
        />
      </Page>
    </div>
  );
};
