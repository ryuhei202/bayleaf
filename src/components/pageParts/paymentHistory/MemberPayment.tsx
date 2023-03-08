import { Typography } from "../../baseParts/legacy/Typography";
import { Pagination } from "../../baseParts/Pagination";
import { PaymentHistoryList, TMemberPayment } from "./PaymentHistoryList";
type TProps = {
  currentPage: number;
  onClickPagenation: (page: number) => void;
  maxPage: number;
  paymentData: TMemberPayment[];
  nextPaymentDate: string;
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
    <>
      <Typography weight="regular" size="xl" color="primary" className="ml-4">
        決済履歴
      </Typography>
      <div className="border-[0.5px] border-gray my-2" />
      <div className="flex">
        <Typography
          weight="regular"
          size="base"
          color="primary"
          className="ml-2 mb-4 basis-3/5"
        >
          次回決済予定日:
        </Typography>
        <Typography
          weight="regular"
          size="base"
          color="primary"
          className="ml-2 mb-4  basis-2/5"
        >
          {nextPaymentDate}
        </Typography>
      </div>

      <PaymentHistoryList
        memberPayments={paymentData}
        onClickReceiptButton={onClickReceiptButton}
      />
      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        onClickPagination={onClickPagenation}
        className="mt-6"
      />
    </>
  );
};
