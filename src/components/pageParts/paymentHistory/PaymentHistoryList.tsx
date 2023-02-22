import { TMemberPaymentsIndexResponse } from "../../../api/memberPayments/useMemberPaymentsIndex";
import { Typography } from "../../baseParts/legacy/Typography";
import { PaymentHistoryListItem } from "./PaymentHistoryListItem";

type TProps = {
  memberPayments: [];
  onClickReceiptButton: (memberPaymentId: number) => void;
};

export const PaymentHistoryList = ({
  memberPayments,
  onClickReceiptButton,
}: TProps) => {
  return (
    <div>
      <div className="flex">
        <Typography>日付</Typography>
        <Typography>区分</Typography>
        <Typography>金額（税込）</Typography>
      </div>
      <div>
        {memberPayments.map((memberPayment: TMemberPaymentsIndexResponse) => {
          return (
            <PaymentHistoryListItem
              priceTaxIn={memberPayment.priceTaxIn}
              memberPaymentId={memberPayment.paymentId}
              paymentDate={memberPayment.paymentDate}
              paymentTypeName={memberPayment.paymentTypeName}
              onClickReceiptButton={onClickReceiptButton}
            />
          );
        })}
      </div>
    </div>
  );
};
      <div>
        <Typography>
          
        </Typography>
      </div>
      {memberPayments.map((memberPayment: TMemberPaymentsIndexResponse) => {
        return (
          
        );
      })}
    </div>
  );
};