import { useContext } from "react";
import { useQuery } from "react-query";
import { IdTokenContext, StylistIdContext } from "../App";
import { customAxios } from "./customAxios";

export const useGetRequest = <T>(
  path: string
): {
  data?: T;
  error: Error | null;
} => {
  const idToken = useContext(IdTokenContext);
  const stylistId = useContext(StylistIdContext);

  const { data, error } = useQuery<T, Error>(path, () =>
    customAxios
      .get(`${process.env.REACT_APP_HOST_URL}/${path}`, {
        headers: {
          Authorization: idToken,
        },
        params: {
          stylistId,
        },
      })
      .then((r) => r.data)
  );

  return {
    data,
    error,
  };
};
