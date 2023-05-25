import { TPropertyRecord } from "../../models/shared/TPropertyRecord";
import { useGetRequest } from "../useGetRequest";

export type TMemberSizeOptionsIndexResponse = {
  readonly tops: TPropertyRecord[];
  readonly bottoms: TPropertyRecord[];
  readonly shoulders: (TPropertyRecord & { imageFilePath: string })[];
  readonly waists: (TPropertyRecord & { imageFilePath: string })[];
  readonly hips: (TPropertyRecord & { imageFilePath: string })[];
  readonly busts: (TPropertyRecord & { imageFilePath: string })[];
};

export const useMemberSizeOptionsIndex = () => {
  const { data, error } = useGetRequest<TMemberSizeOptionsIndexResponse>(
    "member_size_options"
  );
  return {
    data,
    error,
  };
};
