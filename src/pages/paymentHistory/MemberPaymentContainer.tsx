import { useState } from "react";
import { useMemberPaymentsIndex } from "../../api/memberPayments/useMemberPaymentsIndex";
import { BaseDialog } from "../../components/baseParts/dialogs/BaseDialog";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberPayment } from "./MemberPayment";
import { ReceiptCointainer } from "./ReceiptContainer";

type TProps = {
  nextPaymentDate: string;
};
export const MemberPaymentContainer = ({ nextPaymentDate }: TProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [memberPaymentId, setMemberPaymentId] =
    useState<number | undefined>(undefined);
  const { data: memberPaymentsData, error: memberPaymentError } =
    useMemberPaymentsIndex({
      params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
      selectedPage,
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

  const targetPaymet = memberPaymentsData.memberPayments.find(
    (memberPayment) => memberPayment.id === memberPaymentId
  );
  return (
    <>
      {targetPaymet && (
        <BaseDialog
          open={isOpen}
          title={"領収書"}
          onClose={() => setIsOpen(false)}
          description={
            <ReceiptCointainer
              memberPaymentId={memberPaymentId}
              paymentid={targetPaymet.paymentId}
              receiptCreatedAt={targetPaymet.paymentDate}
              usingPoint={targetPaymet.point}
              finalPrice={targetPaymet.priceTaxIn}
            />
          }
        ></BaseDialog>
      )}
      <MemberPayment
        currentPage={selectedPage}
        onClickPagenation={handleClickPagination}
        maxPage={Math.floor((memberPaymentsData.totalCount - 1) / 10 + 1)}
        paymentData={memberPaymentsData.memberPayments}
        nextPaymentDate={nextPaymentDate}
        onClickReceiptButton={handleClickReceiptButton}
      ></MemberPayment>
    </>
  );
};
