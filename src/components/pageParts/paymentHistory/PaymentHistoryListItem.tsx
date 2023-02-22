import { Button } from "../../baseParts/Button";
import { Typography } from "../../baseParts/legacy/Typography";

type TProps = {
  priceTaxIn: number;
  memberPaymentId: number;
  paymentDate: string;
  paymentTypeName: string;
  onClickReceiptButton: (memberPaymentId: number) => void;
};

export const PaymentHistoryListItem = ({
  priceTaxIn,
  memberPaymentId,
  paymentDate,
  paymentTypeName,
  onClickReceiptButton,
}: TProps) => {
  return (
    <div className="bg-white flex justify-center items-center h-12">
      <div className="mx-2">
        <Typography color="strong-gray" size="xs">
          {paymentDate}
        </Typography>
      </div>
      <div className="mx-2">
        <Typography color="strong-gray" size="xs">
          {paymentTypeName}
        </Typography>
      </div>
      <div className="mx-2">
        <Typography color="strong-gray" size="xs">
          {priceTaxIn}円
        </Typography>
      </div>
      <div className="mx-2">
        <Button
          onClick={() => onClickReceiptButton(memberPaymentId)}
          variant="line"
          size="small"
          className=""
        >
          <Typography color="strong-gray" size="xs">
            領収書を発行
          </Typography>
        </Button>
      </div>
    </div>
  );
};
