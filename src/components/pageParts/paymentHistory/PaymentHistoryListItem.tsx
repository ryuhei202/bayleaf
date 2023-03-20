import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";
import { TMemberPayment } from "./PaymentHistoryList";

type TProps = {
  memberPayment: TMemberPayment;
  onClickReceiptButton: (memberPaymentId: number) => void;
};

export const PaymentHistoryListItem = ({
  memberPayment,
  onClickReceiptButton,
}: TProps) => {
  const formattedDate = memberPayment.paymentDate.replace(
    /^(\d{4})-(\d{2})-(\d{2}).*$/,
    "$1年$2月$3日"
  );
  return (
    <div className="bg-white flex justify-self-start items-center h-12 my-1">
      <div className="basis-2/5">
        <Typography color="strong-gray" size="xs">
          {formattedDate}
        </Typography>
      </div>
      <div className="basis-1/4">
        <Typography color="strong-gray" size="xs">
          {memberPayment.paymentTypeName}
        </Typography>
      </div>
      <div className="basis-1/4">
        <Typography color="strong-gray" size="xs">
          {memberPayment.priceTaxIn.toLocaleString()}円
        </Typography>
      </div>
      <div className="basis-1/4">
        {memberPayment.isAvailableReceipt ? (
          <Button
            onClick={() => onClickReceiptButton(memberPayment.id)}
            variant="line"
            size="small"
          >
            <Typography color="strong-gray" className="text-[11px]">
              領収書
            </Typography>
          </Button>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
