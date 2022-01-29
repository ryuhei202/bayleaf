import { useContext } from "react";
import { useMutation } from "react-query";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const usePatchRequest = <T>(path: string, params: T) => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { mutate, isLoading } = useMutation(path, () =>
    customAxios.patch(
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
