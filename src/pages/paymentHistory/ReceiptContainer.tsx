import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { TMemberPaymentsIndexResponse } from "../../api/memberPayments/useMemberPaymentsIndex";
import { useReceiptShow } from "../../api/receipts/useReceiptShow";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { LoaderPage } from "../../components/baseParts/pages/LoaderPage";
import { Receipts } from "./Receipt";

type TProps = {
  memberPaymentId: number;
  memberPaymentsData: TMemberPaymentsIndexResponse;
};
export const ReceiptCointainer = ({
  memberPaymentId,
  memberPaymentsData,
}: TProps) => {
  const componentRef = useRef(null);
  const { data: receiptData, error: receiptError } = useReceiptShow({
    memberPaymentId: memberPaymentId,
  });
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
