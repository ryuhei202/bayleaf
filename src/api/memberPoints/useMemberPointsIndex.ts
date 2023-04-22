import { useGetRequest } from "../useGetRequest";

export type TMemberPoint = {
  readonly id: number;
  readonly createdAt: string;
  readonly point: number;
};

export type TMemberPointsIndexResponse = {
  readonly memberPoints: TMemberPoint[];
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
export const useMemberPointsIndex = ({
  memberId,
  params,
}: TPaginationParams) => {
  const { data, error, refetch, isRefetching, isRefetchError } =
    useGetRequest<TMemberPointsIndexResponse>(
      `members/${memberId}/member_points`,
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
