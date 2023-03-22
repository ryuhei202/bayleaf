import { TMemberPayment } from "../../components/pageParts/paymentHistory/PaymentHistoryList";
import { useGetRequest } from "../useGetRequest";
export type TMemberPaymentsIndexResponse = {
  readonly memberPayments: TMemberPayment[];
  readonly totalCount: number;
};
export type TPaginationParams = {
  params: {
    limit?: number;
    offset?: number;
    order?: "asc" | "desc";
  };
  selectedPage: number;
};
export const useMemberPaymentsIndex = ({
  params,
  selectedPage,
}: TPaginationParams) => {
  const { data, error } = useGetRequest<TMemberPaymentsIndexResponse>(
    `member_payments`,
    params,
    undefined,
    `member_payments/${selectedPage}`
  );
  return {
    data,
    error,
  };
};
