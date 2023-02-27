import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  priceTaxIn: number;
  memberPaymentId: string;
  paymentDate: string;
  paymentTypeName: string;
  isAvailableReceipt: boolean;
  onClickReceiptButton: (memberPaymentId: string) => void;
};

export const PaymentHistoryListItem = ({
  priceTaxIn,
  memberPaymentId,
  paymentDate,
  paymentTypeName,
  isAvailableReceipt,
  onClickReceiptButton,
}: TProps) => {
  return (
    <div className="bg-white flex justify-self-start items-center h-12 mb-1">
      <div className="basis-1/4">
        <Typography color="strong-gray" size="xs">
          {paymentDate}
        </Typography>
      </div>
      <div className="basis-1/4">
        <Typography color="strong-gray" size="xs">
          {paymentTypeName}
        </Typography>
      </div>
      <div className="basis-1/4">
        <Typography color="strong-gray" size="xs">
          {priceTaxIn.toLocaleString()}円
        </Typography>
      </div>
      <div className="basis-1/4">
        <Button
          onClick={() => onClickReceiptButton(memberPaymentId)}
          variant="line"
          size="small"
          disabled={!isAvailableReceipt}
        >
          <Typography color="strong-gray" size="xs">
            領収書を発行
          </Typography>
        </Button>
      </div>
    </div>
  );
};
