import { Typography } from "../../baseParts/legacy/Typography";
import { PaymentHistoryListItem } from "./PaymentHistoryListItem";

type TMemberPayments = {
  readonly id: number;
  readonly point: number;
  readonly paymentId: string;
  readonly priceTaxIn: number;
  readonly paymentTypeName: string;
  readonly paymentDate: string;
  readonly isAvailableReceipt: boolean;
};

type TProps = {
  memberPayments: TMemberPayments[];
  onClickReceiptButton: (memberPaymentId: string) => void;
};

export const PaymentHistoryList = ({
  memberPayments,
  onClickReceiptButton,
}: TProps) => {
  return (
    <div>
      <div className="flex justify-self-start">
        <div className="basis-1/4">
          <Typography color="strong-gray" size="xs">
            日付
          </Typography>
        </div>
        <div className="basis-1/4">
          <Typography color="strong-gray" size="xs">
            区分
          </Typography>
        </div>
        <div className="basis-1/4">
          <Typography color="strong-gray" size="xs">
            金額（税込）
          </Typography>
        </div>
      </div>
      <div>
        {memberPayments.map((memberPayment: TMemberPayments) => {
          return (
            <PaymentHistoryListItem
              priceTaxIn={memberPayment.priceTaxIn}
              memberPaymentId={memberPayment.paymentId}
              paymentDate={memberPayment.paymentDate}
              paymentTypeName={memberPayment.paymentTypeName}
              isAvailableReceipt={memberPayment.isAvailableReceipt}
              onClickReceiptButton={onClickReceiptButton}
            />
          );
        })}
      </div>
    </div>
  );
};
