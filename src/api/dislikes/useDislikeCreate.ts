import { usePostRequest } from "../usePostRequest";

export type TDislikeCreateParams = {
  readonly dislikes: string[];
};

export const useDislikeCreate = () => {
  const { mutate, isLoading } =
    usePostRequest<TDislikeCreateParams>("dislikes");

  return { mutate, isLoading };
};
