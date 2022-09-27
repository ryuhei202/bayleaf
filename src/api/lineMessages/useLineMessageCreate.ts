import { AxiosResponse } from "axios";
import { UseMutateFunction } from "react-query";
import { usePostRequest } from "../usePostRequest";

type TLineMessageCreate = {
  readonly mutate: UseMutateFunction<
    void | AxiosResponse,
    any,
    TLineMessageCreateParams,
    unknown
  >;
  readonly isLoading: boolean;
  readonly isSuccess: boolean;
};

export type TLineMessageCreateParams = {
  readonly messages: any[];
};

export const useLineMessageCreate = (): TLineMessageCreate => {
  const { mutate, isLoading, isSuccess } =
    usePostRequest<TLineMessageCreateParams>(
      "line_messages",
      (input) => "stylistId" !== input
    );

  return { mutate, isLoading, isSuccess };
};
