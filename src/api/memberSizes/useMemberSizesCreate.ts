import { usePostRequest } from "../usePostRequest";

type TArgs = {
  memberId: number;
};

type TMemberSizesCreateParams = {
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
  const { mutate, isLoading } = usePostRequest<TMemberSizesCreateParams>(
    `members/${memberId}/member_sizes`
  );

  return { mutate, isLoading };
};
