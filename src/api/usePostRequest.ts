import * as Sentry from "@sentry/react";
import { PreservedKeysCondition } from "axios-case-converter";
import { useContext } from "react";
import { useMutation } from "react-query";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePostRequest = <T>(
  path: string,
  preservedKeys?: string[] | PreservedKeysCondition
) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { mutate, mutateAsync, isLoading, isError, isSuccess, error } =
    useMutation(path, (params: T) =>
      customAxios(preservedKeys)
        .post(
          `${process.env.REACT_APP_HOST_URL}/leeaf/${path}`,
          {
            ...params,
            stylistId,
          },
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

          console.log(e);
          Sentry.captureException(e);
          throw new Error("予期せぬエラーが発生しました");
        })
    );

  return {
    mutate,
    mutateAsync,
    isLoading,
    isError,
    isSuccess,
    error: error as Error | null,
  };
};
