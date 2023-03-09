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
  const getTargetReceiptcIndex = memberPaymentsData.memberPayments.findIndex(
    (memberPayment) => memberPayment.id === memberPaymentId
  );
  return (
    <div>
      <Receipts
        memberPaymentId={
          memberPaymentsData.memberPayments[getTargetReceiptcIndex].paymentId
        }
        receiptCreatedAt={
          memberPaymentsData.memberPayments[getTargetReceiptcIndex].paymentDate
        }
        usingPoint={
          memberPaymentsData.memberPayments[getTargetReceiptcIndex].point
        }
        receiptDetails={receiptData?.receiptDetails}
        cardBrand={receiptData?.cardBrand}
        cardNumber={receiptData?.cardNumber}
        finalPrice={
          memberPaymentsData.memberPayments[getTargetReceiptcIndex].priceTaxIn
        }
        ref={componentRef}
      />
      <ReactToPrint
        trigger={() => (
          <div className="underline text-[#428bca] text-center mt-2">
            印刷する
          </div>
        )}
        content={() => componentRef.current}
      />
    </div>
  );
};
