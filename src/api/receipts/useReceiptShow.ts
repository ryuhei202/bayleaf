import { useGetRequest } from "../useGetRequest";
import { TReceiptResponse } from "./TReceiptsResponse";

type TReceiptsDate = {
  readonly data?: TReceiptResponse;
  readonly error: Error | null;
};

type TReceiptShowParams = {
  memberPaymentId: number;
};

export const useReceiptShow = ({
  memberPaymentId,
}: TReceiptShowParams): TReceiptsDate => {
  const { data, error } = useGetRequest<TReceiptResponse>(
    `member_payments/${memberPaymentId}/receipt`
  );
  return {
    data,
    error,
  };
};
