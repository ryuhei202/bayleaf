import { useGetRequest } from "../useGetRequest";
export type TMemberPaymentsIndexResponse = {
  readonly memberPayments: {
    id: number;
    point: number;
    paymentId: string;
    priceTaxIn: number;
    paymentTypeName: string;
    paymentDate: string;
    isAvailableReceipt: boolean;
  };
  readonly totalCount: number;
};
export type PaginationParams = {
  readonly limit: number;
  readonly offset: number;
  readonly order: "asc" | "desc";
};
type TMemberPaymentsArgs = {
  params: PaginationParams;
};
export const useMemberPaymentsIndex = ({ params }: TMemberPaymentsArgs) => {
  const { data, error } = useGetRequest<TMemberPaymentsIndexResponse[]>(
    `member_payments`,
    params
  );
  return {
    data,
    error,
  };
};
