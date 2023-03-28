import liff from "@line/liff/dist/lib";
import { useState } from "react";
import { useMemberPaymentsIndex } from "../../api/memberPayments/useMemberPaymentsIndex";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { MemberPayment } from "./MemberPayment";

type TProps = {
  nextPaymentDate: string | null;
};
export const MemberPaymentContainer = ({ nextPaymentDate }: TProps) => {
  const [selectedPage, setSelectedPage] = useState<number>(1);
  const { data: memberPaymentsData, error: memberPaymentError } =
    useMemberPaymentsIndex({
      params: { limit: 10, offset: (selectedPage - 1) * 10, order: "desc" },
      selectedPage,
    });

  const handleClickPagination = (page: number) => {
    setSelectedPage(page);
  };

  const handleClickReceiptButton = (memberPaymentId: number) => {
    liff.openWindow({
      url: `${process.env.REACT_APP_HOST_URL}/receipt/${memberPaymentId}.pdf`,
      external: true,
    });
  };

  if (memberPaymentError)
    return <ErrorPage message={memberPaymentError.message} />;
  if (!memberPaymentsData) return <LoaderPage />;

  return (
    <MemberPayment
      currentPage={selectedPage}
      onClickPagenation={handleClickPagination}
      maxPage={Math.floor((memberPaymentsData.totalCount - 1) / 10 + 1)}
      paymentData={memberPaymentsData.memberPayments}
      nextPaymentDate={nextPaymentDate}
      onClickReceiptButton={handleClickReceiptButton}
    ></MemberPayment>
  );
};
