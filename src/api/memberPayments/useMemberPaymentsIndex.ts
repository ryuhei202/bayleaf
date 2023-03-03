import { TMemberPayment } from "../../components/pageParts/paymentHistory/PaymentHistoryList";
import { useGetRequest } from "../useGetRequest";
export type TMemberPaymentsIndexResponse = {
  readonly memberPayments: TMemberPayment[];
  readonly totalCount: number;
};
export type PaginationParams = {
  params: {
    limit?: number;
    offset?: number;
    order?: "asc" | "desc";
  };
};
export const useMemberPaymentsIndex = ({ params }: PaginationParams) => {
  const { data, error } = useGetRequest<TMemberPaymentsIndexResponse>(
    `member_payments`,
    params
  );
  return {
    data,
    error,
  };
};
