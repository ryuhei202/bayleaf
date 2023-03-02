import { Typography } from "../../baseParts/legacy/Typography";
import { Pagination } from "../../baseParts/Pagination";
import { PaymentHistoryList, TMemberPayments } from "./PaymentHistoryList";
type TProps = {
  currentPage: number;
  onClickPagenation: (page: number) => void;
  maxPage: number;
  paymentData: TMemberPayments[];
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
    <div>
      <Typography weight="regular" size="xl" className="ml-4">
        決済履歴
      </Typography>
      <div className="border-[0.5px] border-gray my-2"></div>
      <Typography weight="regular" size="base" className="ml-2 mb-4">
        次回決済予定日: 　　　　　{nextPaymentDate}
      </Typography>
      <PaymentHistoryList
        memberPayments={paymentData}
        onClickReceiptButton={onClickReceiptButton}
      ></PaymentHistoryList>
      <Pagination
        maxPage={maxPage}
        currentPage={currentPage}
        onClickPagination={onClickPagenation}
        className="mt-6"
      ></Pagination>
    </div>
  );
};
