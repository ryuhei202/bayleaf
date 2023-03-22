import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { useReceiptShow } from "../../api/receipts/useReceiptShow";
import { Button } from "../../components/baseParts/legacy/Button";
import { Loader } from "../../components/baseParts/loaders/Loader";
import { ErrorPage } from "../../components/baseParts/pages/ErrorPage";
import { Receipts } from "./Receipt";

type TProps = {
  memberPaymentId: number | undefined;
  paymentid: string;
  receiptCreatedAt: string;
  usingPoint: number;
  finalPrice: number;
};

export const ReceiptCointainer = ({
  memberPaymentId,
  paymentid,
  receiptCreatedAt,
  usingPoint,
  finalPrice,
}: TProps) => {
  const componentRef = useRef(null);
  const { data: receiptData, error: receiptError } = useReceiptShow({
    memberPaymentId: memberPaymentId,
  });
  if (receiptError) return <ErrorPage message={receiptError.message} />;
  if (!receiptData) return <Loader />;
  return (
    <>
      <Receipts
        memberPaymentId={paymentid}
        receiptCreatedAt={receiptCreatedAt}
        usingPoint={usingPoint}
        receiptDetails={receiptData.receiptDetails}
        cardBrand={receiptData.cardBrand}
        cardNumber={receiptData.cardNumber}
        finalPrice={finalPrice}
        ref={componentRef}
      />
      <ReactToPrint
        trigger={() => <Button variant="primary">印刷する</Button>}
        content={() => componentRef.current}
      />
    </>
  );
};
