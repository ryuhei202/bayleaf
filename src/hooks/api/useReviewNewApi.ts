import { useContext } from "react";
import useSWR from "swr";
import { FormResponse } from "../../models/review/FormResponse";
import { IdTokenContext, StylistIdContext } from "../../App";
import { customAxios } from "../../models/shared/customAxios";

type reviewNewApi = {
  readonly data?: FormResponse[];
  readonly error: any;
};

export const useReviewNewApi = (karteId: number): reviewNewApi => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);
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
        params: { stylistId, chartId: karteId },
      })
      .then((r) => {
        return r.data;
      });

  const { data, error } = useSWR(
    [`${process.env.REACT_APP_HOST_URL}/reviews/new`, idToken, karteId],
    fetcher
  );

  return { data, error };
};
