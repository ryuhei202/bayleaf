import * as Sentry from "@sentry/react";
import { useContext } from "react";
import { useMutation } from "react-query";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePatchRequest = <T>(path: string, params?: T) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const param = {
    ...params,
    stylistId,
  };
  const { mutate, isLoading, error } = useMutation(path, (lateParams?: T) =>
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
        if (
          e.response?.data?.message !== undefined &&
          e.response.data.message !== ""
        ) {
          throw new Error(e.response.data.message);
        }

        Sentry.captureException(e);
        throw new Error("予期せぬエラーが発生しました");
      })
  );

  return { mutate, isLoading, error: error as Error | null };
};
