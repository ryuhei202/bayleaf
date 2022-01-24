import { TMembersIndexResponse } from "./TMembersIndexResponse";
import { useGetRequest } from "../useGetRequest";

type MembersIndex = {
  readonly data?: TMembersIndexResponse[];
  readonly error: Error | null;
};
export const useMembersIndex = (): MembersIndex => {
  const { data, error } = useGetRequest<TMembersIndexResponse[]>("members");

  return {
    data,
    error,
  };
};
