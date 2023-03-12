import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useMemberPaymentsIndex } from "../../api/memberPayments/useMemberPaymentsIndex";
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

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => {
          setMemberPaymentId(undefined);
        }}
      >
        <Dialog.Panel>
          {
            <ReceiptCointainer
              memberPaymentId={memberPaymentId}
              memberPaymentsData={memberPaymentsData}
            />
          }
        </Dialog.Panel>
      </Dialog>
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
