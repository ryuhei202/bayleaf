import { Dialog } from "@headlessui/react";
import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import { useMemberPaymentsIndex } from "../../api/memberPayments/useMemberPaymentsIndex";
import { useReceiptShow } from "../../api/receipts/useReceiptShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberPayment } from "./MemberPayment";
import { Receipts } from "./Receipt";

type TProps = {
  nextPaymentDate: string;
};
export const MemberPaymentContainer = ({ nextPaymentDate }: TProps) => {
  const componentRef = useRef(null);
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleClickReceiptButton = (memberPaymentId: number) => {
    setMemberPaymentId(memberPaymentId);
    setIsOpen(true);
  };

  if (memberPaymentError)
    return <ErrorPage message={memberPaymentError.message} />;
  if (!memberPaymentsData) return <LoaderPage />;

  const getPanel = () => {
    if (receiptError) return <ErrorPage message={receiptError.message} />;
    if (!receiptData) return <LoaderPage />;
    return (
      <div>
        <ReactToPrint
          trigger={() => <button>プリントアウト！</button>}
          content={() => componentRef.current}
        />
        <Receipts
          memberPaymentId={
            memberPaymentsData.memberPayments[memberPaymentId].paymentId
          }
          receiptCreatedAt={
            memberPaymentsData.memberPayments[memberPaymentId].paymentDate
          }
          usingPoint={memberPaymentsData.memberPayments[memberPaymentId].point}
          receiptDetails={receiptData?.receiptDetails}
          cardBrand={receiptData?.cardBrand}
          cardNumber={receiptData?.cardNumber}
          ref={componentRef}
        />
      </div>
    );
  };

  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>{getPanel()}</Dialog.Panel>
      </Dialog>

      <MemberPayment
        currentPage={selectedPage}
        onClickPagenation={handleClickPagination}
        maxPage={(memberPaymentsData.totalCount - 1) / 10 + 1}
        paymentData={memberPaymentsData.memberPayments}
        nextPaymentDate={nextPaymentDate}
        onClickReceiptButton={handleClickReceiptButton}
      ></MemberPayment>
    </>
  );
};
