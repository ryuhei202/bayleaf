import { customAxios } from "./customAxios";
import { useMutation } from "react-query";
import { useContext } from "react";
import * as Sentry from "@sentry/react";
import { IdTokenContext, StylistIdContext } from "../App";

export const useDeleteRequest = <T>(path: string, params?: T) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const data = {
    headers: { Authorization: idToken },
    data: { ...params, stylistId },
  };
  const { mutate, isLoading } = useMutation(
    path,
    () =>
      customAxios()
        .delete(`${process.env.REACT_APP_HOST_URL}/leeaf/${path}`, data)
        .catch((e) => {
          Sentry.captureException(e);
        }),
    {
      onError: (e) => {
        Sentry.captureException(e);
      },
    }
  );

  return { mutate, isLoading };
};
