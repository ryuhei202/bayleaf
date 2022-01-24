import { useContext } from "react";
import useSWR from "swr";
import { KarteListResponse } from "../../models/review/KarteListResponse";
import { IdTokenContext, StylistIdContext } from "../../App";
import { customAxios } from "../../api/customAxios";

type reviewIndexApi = {
  readonly data?: KarteListResponse[];
  readonly error: any;
};

export const useReviewIndexApi = (): reviewIndexApi => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const fetcher = (
    url: string,
    idToken: string
  ): Promise<KarteListResponse[] | undefined> =>
    customAxios
      .get(`${url}`, {
        headers: {
          Authorization: idToken,
        },
        params: {
          stylistId,
        },
      })
      .then((r) => {
        return r.data;
      });
  const { data, error } = useSWR(
    [`${process.env.REACT_APP_HOST_URL}/reviews`, idToken],
    fetcher
  );
  return { data, error };
};
