import { AxiosResponse } from "axios";
import { UseMutateAsyncFunction, UseMutateFunction } from "react-query";
import { MEMBER_PHOTO_CATEGORY_ID_TYPE } from "../../models/consult/MemberPhotoCategoryId";
import { TImagePathsResponse } from "../shared/TImagePathsResponse";
import { usePostRequest } from "../usePostRequest";

type TMemberPhotoCreate = {
  readonly mutate: UseMutateFunction<
    AxiosResponse,
    unknown,
    TMemberPhotoCreateParams,
    unknown
  >;
  readonly mutateAsync: UseMutateAsyncFunction<
    AxiosResponse,
    unknown,
    TMemberPhotoCreateParams,
    unknown
  >;
  readonly isLoading: boolean;
};

export type TMemberPhotoCreateParams = {
  readonly image: {
    readonly memberPhotoCategoryId: MEMBER_PHOTO_CATEGORY_ID_TYPE;
    readonly imageData: string;
    readonly imageFileName: string;
    readonly chartId?: number;
    readonly itemIds?: number[];
  };
};

export type TMemberPhotoCreateResponse = {
  imagePaths: TImagePathsResponse;
};

export const useMemberPhotoCreate = (): TMemberPhotoCreate => {
  const { mutate, mutateAsync, isLoading } =
    usePostRequest<TMemberPhotoCreateParams>("member_photos");

  return { mutate, mutateAsync, isLoading };
};
