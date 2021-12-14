import { useContext } from "react";
import useSWR from "swr";
import { KarteListResponse } from "../../models/review/KarteListResponse";
import { IdTokenContext } from "../../App";
import { customAxios } from "../../models/shared/customAxios";

type reviewIndexApi = {
  readonly data?: KarteListResponse[];
  readonly error: any;
};

export const useReviewIndexApi = (): reviewIndexApi => {
  const idToken = useContext(IdTokenContext);
  const fetcher = (
    url: string,
    idToken: string
  ): Promise<KarteListResponse[] | undefined> =>
    customAxios
      .get(`${url}`, {
        headers: {
          Authorization: idToken,
        },
      })
      .then((r) => {
        return r.data;
      });
  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_HOST_URL}/reviews`, idToken],
    fetcher
  );
  return { data, error };
};
