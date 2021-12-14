import { useContext } from "react";
import useSWR from "swr";
import { FormResponse } from "../../models/review/FormResponse";
import { IdTokenContext } from "../../pages/_app";
import { customAxios } from "../../models/shared/customAxios";

type reviewNewApi = {
  readonly data?: FormResponse[];
  readonly error: any;
};

export const useReviewNewApi = (karteId: number): reviewNewApi => {
  const idToken = useContext(IdTokenContext);
  const fetcher = (
    url: string,
    idToken: string,
    karteId: number
  ): Promise<FormResponse[] | undefined> =>
    customAxios
      .get(`${url}`, {
        headers: {
          Authorization: idToken,
        },
        params: { chartId: karteId },
      })
      .then((r) => {
        return r.data;
      });

  const { data, error } = useSWR(
    [`${process.env.NEXT_PUBLIC_HOST_URL}/reviews/new`, idToken, karteId],
    fetcher
  );

  return { data, error };
};
