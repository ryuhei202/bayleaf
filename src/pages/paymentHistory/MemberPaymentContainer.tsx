import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useMemberPaymentsIndex } from "../../api/memberPayments/useMemberPaymentsIndex";
import { useReceiptShow } from "../../api/receipts/useReceiptShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberPayment } from "../../components/pageParts/paymentHistory/MemberPayment";
import { Receipts } from "./Receipt";

type TProps = {
  nextPaymentDate: string;
};

export const MemberPaymentContainer = ({ nextPaymentDate }: TProps) => {
  const componentRef = useRef(null);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [isClickedReceiptButton, setIsClickedReceiptButton] =
    useState<boolean>(false);
  const [memberPaymentId, setMemberPaymentId] = useState<number>(0);

  const { data: memberPaymentsData, error: memberPaymentError } =
    useMemberPaymentsIndex({
      params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
    });

  const { data: receiptData, error: receiptError } = useReceiptShow({
    memberPaymentId: memberPaymentId,
  });

  const handleClickPagination = (page: number) => {
    setSelectedPage(page);
  };

  const handleClickCloseReceipt = () => {
    setIsClickedReceiptButton(false);
  };

  const handleClickNoAction = (e: React.MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
  };

  const handleClickReceiptButton = (memberPaymentId: number) => {
    setMemberPaymentId(memberPaymentId);
    setIsClickedReceiptButton(true);
  };

  if (memberPaymentError)
    return <ErrorPage message={memberPaymentError.message} />;
  if (!memberPaymentsData) return <LoaderPage />;

  if (isClickedReceiptButton) {
    if (receiptError) return <ErrorPage message={receiptError.message} />;
    if (!receiptData) return <LoaderPage />;
    return (
      <div onClick={handleClickCloseReceipt}>
        <ReactToPrint
          trigger={() => <button>プリントアウト！</button>}
          content={() => componentRef.current}
        />
        <Receipts
          onClick={() => handleClickNoAction}
          memberPaymentId={
            memberPaymentsData.memberPayments[memberPaymentId].paymentId
          }
          receiptCreatedAt={
            memberPaymentsData.memberPayments[memberPaymentId].paymentDate
          }
          usingPoint={memberPaymentsData.memberPayments[memberPaymentId].point}
          receiptDetails={receiptData.receiptDetails}
          cardBrand={receiptData.cardBrand}
          cardNumber={receiptData.cardNumber}
          ref={componentRef}
        />
        ;
      </div>
    );
  }

  return (
    <div>
      <MemberPayment
        currentPage={selectedPage}
        onClickPagenation={handleClickPagination}
        maxPage={(memberPaymentsData.totalCount - 1) / 10 + 1}
        paymentData={memberPaymentsData.memberPayments}
        nextPaymentDate={nextPaymentDate}
        onClickReceiptButton={handleClickReceiptButton}
      ></MemberPayment>
    </div>
  );
};
