import { Typography } from "../../baseParts/legacy/Typography";
import { PaymentHistoryListItem } from "./PaymentHistoryListItem";

export type TMemberPayment = {
  readonly id: number;
  readonly point: number;
  readonly paymentId: string;
  readonly priceTaxIn: number;
  readonly paymentTypeName: string;
  readonly paymentDate: string;
  readonly isAvailableReceipt: boolean;
};

type TProps = {
  memberPayments: TMemberPayment[];
  onClickReceiptButton: (memberPaymentId: number) => void;
};

export const PaymentHistoryList = ({
  memberPayments,
  onClickReceiptButton,
}: TProps) => {
  return (
    <div>
      <div className="flex justify-self-start">
        <div className="basis-2/6">
          <Typography color="strong-gray" size="xs">
            日付
          </Typography>
        </div>
        <div className="basis-1/5">
          <Typography color="strong-gray" size="xs" className="ml-[4px]">
            区分
          </Typography>
        </div>
        <div className="basis-2/5">
          <Typography color="strong-gray" size="xs" className="ml-[8px]">
            金額（税込）
          </Typography>
        </div>
      </div>
      <div>
        {memberPayments.map((memberPayment: TMemberPayment) => {
          return (
            <PaymentHistoryListItem
              memberPayment={memberPayment}
              onClickReceiptButton={onClickReceiptButton}
            />
          );
        })}
      </div>
    </div>
  );
};
