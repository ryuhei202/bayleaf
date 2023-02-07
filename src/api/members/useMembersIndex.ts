import { useGetRequest } from "../useGetRequest";
import { TMembersIndexResponse } from "./TMembersIndexResponse";

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
