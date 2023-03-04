import { useState } from "react";
import { useMemberPaymentsIndex } from "../../../api/memberPayments/useMemberPaymentsIndex";
import { useReceiptShow } from "../../../api/receipts/useReceiptShow";
import { ErrorPage } from "../../baseParts/pages/ErrorPage";
import { LoaderPage } from "../../baseParts/pages/LoaderPage";
import { MemberPayment } from "./MemberPayment";

type TProps = {
  nextPaymentDate: string;
};

export const MemberPaymentContainer = ({ nextPaymentDate }: TProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [isClickedReceiptButton, setIsClickedReceiptButton] =
    useState<boolean>(false);
  const [memberPaymentId, setMemberPaymentId] = useState<number>();

  const { data: memberPaymentsData, error: memberPaymentError } =
    useMemberPaymentsIndex({
      params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
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
  if (isClickedReceiptButton && memberPaymentId) {
    const { data: receiptData, error: receiptError } = useReceiptShow({
      memberPaymentId: memberPaymentId,
    });

    if (receiptError) return <ErrorPage message={receiptError.message} />;
    if (!receiptData) return <LoaderPage />;
    return (
      <div onClick={handleClickCloseReceipt}>
        <Receiots
          onClick={handleClickNoAction}
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
