import { useContext } from "react";
import { useMutation } from "react-query";
import * as Sentry from "@sentry/react";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePatchRequest = <T>(path: string, params?: T) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const param = {
    ...params,
    stylistId,
  };
  const { mutate, isLoading } = useMutation(
    path,
    (lateParams?: T) =>
      customAxios()
        .patch(
          `${process.env.REACT_APP_HOST_URL}/leeaf/${path}`,
          lateParams ? { ...lateParams, stylistId } : param,
          {
            headers: {
              Authorization: idToken,
            },
          }
        )
        .catch((e) => {
          Sentry.captureException(e);
        }),
    {
      onError: (error) => {
        Sentry.captureException(error);
      },
    }
  );

  return { mutate, isLoading };
};
