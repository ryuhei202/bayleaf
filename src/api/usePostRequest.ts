import { useContext } from "react";
import { useMutation } from "react-query";
import * as Sentry from "@sentry/react";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";
import { PreservedKeysCondition } from "axios-case-converter";

export const usePostRequest = <T>(
  path: string,
  preservedKeys?: string[] | PreservedKeysCondition
) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { mutate, mutateAsync, isLoading, isError, isSuccess } = useMutation(
    path,
    (params: T) =>
      customAxios(preservedKeys).post(
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
      ),
    {
      onError: (error) => {
        Sentry.captureException(error);
      },
    }
  );

  return { mutate, mutateAsync, isLoading, isError, isSuccess };
};
