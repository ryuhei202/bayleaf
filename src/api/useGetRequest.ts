import { useContext } from "react";
import { useQuery } from "react-query";
import * as Sentry from "@sentry/react";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const useGetRequest = <TResponse, TParams = {}>(
  path: string,
  params?: TParams
): {
  data?: TResponse;
  error: Error | null;
} => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { data, error } = useQuery<TResponse, Error>(
    path,
    () =>
      customAxios()
        .get(`${process.env.REACT_APP_HOST_URL}/${path}`, {
          headers: {
            Authorization: idToken,
          },
          params: {
            ...params,
            stylistId,
          },
        })
        .then((r) => r.data),
    {
      onError: (error) => {
        Sentry.captureException(error);
      },
    }
  );

  return {
    data,
    error,
  };
};
