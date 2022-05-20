import { useContext } from "react";
import { useMutation } from "react-query";
import * as Sentry from "@sentry/react";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePostRequest = <T>(path: string) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { mutate, mutateAsync, isLoading } = useMutation(
    path,
    (params: T) =>
      customAxios.post(
        `${process.env.REACT_APP_HOST_URL}/${path}`,
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

  return { mutate, mutateAsync, isLoading };
};
