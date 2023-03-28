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
  memberId: number;
};
export const useMemberPaymentsIndex = ({
  memberId,
  params,
}: TPaginationParams) => {
  const { data, error, refetch, isRefetching, isRefetchError } =
    useGetRequest<TMemberPaymentsIndexResponse>(
      `members/${memberId}/member_payments`,
      params,
      undefined
    );
  return {
    data,
    error,
    refetch,
    isRefetching,
    isRefetchError,
  };
};
