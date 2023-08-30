import { Page } from "../../components/baseParts/legacy/Page";
import { Typography } from "../../components/baseParts/legacy/Typography";
import { Pagination } from "../../components/baseParts/Pagination";

import {
  PaymentHistoryList,
  TMemberPayment,
} from "../../components/pageParts/paymentHistory/PaymentHistoryList";
type TProps = {
  currentPage: number;
  onClickPagenation: (page: number) => void;
  maxPage: number;
  paymentData: TMemberPayment[];
  nextPaymentDate: string | null;
  onClickReceiptButton: (memberPaymentId: number) => void;
};
export const MemberPayment = ({
  currentPage,
  onClickPagenation,
  maxPage,
  paymentData,
  nextPaymentDate,
  onClickReceiptButton,
}: TProps) => {
  return (
    <Page className="flex flex-col p-4">
      <Typography weight="regular" size="xl" color="primary" className="ml-4">
        決済履歴
      </Typography>
      <div className="my-2 border-[0.5px] border-gray" />
      {nextPaymentDate !== null && (
        <div className="flex">
          <Typography
            weight="regular"
            size="base"
            color="primary"
            className="mb-4 ml-2 basis-3/5"
          >
            次回決済予定日:
          </Typography>
          <Typography
            weight="regular"
            size="base"
            color="primary"
            className="mb-4 ml-2  basis-2/5"
          >
            {nextPaymentDate}
          </Typography>
        </div>
      )}

      <div className="grow">
        <PaymentHistoryList
          memberPayments={paymentData}
          onClickReceiptButton={onClickReceiptButton}
        />
      </div>

      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        onClickPagination={onClickPagenation}
        className="mt-6"
      />
    </Page>
  );
};
