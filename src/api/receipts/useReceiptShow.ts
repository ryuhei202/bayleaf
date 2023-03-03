import { useGetRequest } from "../useGetRequest";
import { TReceiptShowResponse } from "./TReceiptShowResponse";

type TReceiptsDate = {
  readonly data?: TReceiptShowResponse;
  readonly error: Error | null;
};

type TReceiptShowParams = {
  memberPaymentId: number;
};

export const useReceiptShow = ({
  memberPaymentId,
}: TReceiptShowParams): TReceiptsDate => {
  const { data, error } = useGetRequest<TReceiptShowResponse>(
    `member_payments/${memberPaymentId}/receipt`
  );
  return {
    data,
    error,
  };
};
