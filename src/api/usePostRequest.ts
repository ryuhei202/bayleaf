import { useContext } from "react";
import { useMutation } from "react-query";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePostRequest = <T>(path: string) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { mutate, isLoading } = useMutation(path, (params: T) =>
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
    )
  );

  return { mutate, isLoading };
};
