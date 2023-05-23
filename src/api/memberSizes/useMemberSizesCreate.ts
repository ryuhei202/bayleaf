import { usePostRequest } from "../usePostRequest";

type TArgs = {
  memberId: number;
};

export type TMemberSizesCreateParams = {
  readonly tops: number;
  readonly bottoms: number;
  readonly shoulder: number;
  readonly waist: number;
  readonly hip: number;
  readonly bust: number;
  readonly image?: {
    readonly imageData: string;
    readonly imageFileName: string;
  };
};

export const useMemberSizesCreate = ({ memberId }: TArgs) => {
  const { mutate, isLoading, error, isSuccess } =
    usePostRequest<TMemberSizesCreateParams>(`members/${memberId}/member_size`);

  return { mutate, isLoading, error, isSuccess };
};
